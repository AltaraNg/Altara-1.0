<?php

namespace App\Http\Controllers;

use App\Helper\OrderConstants;
use App\Helper\OrderObject;
use App\Order;
use App\PromiseCall;
use App\Reminder;
use Illuminate\Http\Request;

class ReminderController extends Controller implements OrderConstants
{
    use OrderObject;

    public function create(Request $request)
    {
        $requestObject = [
            'list' => $request['list'],
            'page' => $request['page'],
            'dateTo' => $request['dateTo'],
            'dateFrom' => $request['dateFrom'],
            'pageSize' => $request['pageSize'],
            'branchId' => $request['branchId'],
            'overdueDays' => $request['overdueDays']
        ];
        $list = $requestObject['list'];
        if ($request['filterWithBranch'] === true && !isset($request['branchId']))
            $requestObject['branchId'] = auth('api')->user()->branch_id;

        $reminderList = $list == SELF::PROMISE_CALL_LIST ?
            $this->fetchPromiseCallRemindersList($requestObject) :
            $this->fetchRemindersListByRequestList($requestObject);

        if (isset($list) && !in_array($list, SELF::FIRST_SMS_AND_PROMISE_CALL)) {
            $reminderList = json_decode(json_encode($reminderList, true));
            $reminderList = array_filter($reminderList, function ($order) use ($list, $requestObject) {
                if (!SELF::isOrderRepaymentDetailValid($order)) return false;
                $lastMissedRepaymentDate = SELF::getFirstMissedPaymentDate($order);
                $repaymentDatesArr = SELF::getPossibleRepaymentDatesForASuppliedDate($requestObject);
                return in_array($lastMissedRepaymentDate, $repaymentDatesArr);
            });
        }

        return response()->json([
            'orders' => $reminderList
        ]);
    }

    public function fetchPromiseCallRemindersList($requestObject)
    {
        return PromiseCall::select('order_id', 'date')
            ->dateFilter('date', $requestObject)
            ->with(['order' => function ($query) use ($requestObject) {
                return $query
                    ->when(isset($requestObject['list']), function ($query2) {
                        return $query2->where('status_id', Self::ORDER_STATUS_OK);
                    })
                    ->orderWithOtherTables($requestObject);
            }])
            ->getOrPaginate($requestObject);
    }

    public function fetchRemindersListByRequestList($requestObject)
    {
        return Order::when(isset($requestObject['list']), function ($query2) {
            return $query2->where('status_id', Self::ORDER_STATUS_OK);
        })
            ->dateFilter('order_date', $requestObject)
            ->orderWithOtherTables($requestObject)
            ->getOrPaginate($requestObject);
    }

    public function store(Request $request)
    {
        Reminder::insert($request->reminders);
        return response()->json(['saved' => true]);
    }
}