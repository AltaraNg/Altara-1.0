<?php

namespace App\Http\Controllers;

use App\Helper\ExtractRequestObject;
use App\Helper\OrderConstants;
use App\Helper\OrderObject;
use App\Order;
use App\PromiseCall;
use App\Reminder;
use Illuminate\Http\Request;

class ReminderController extends Controller implements OrderConstants
{
    use OrderObject, ExtractRequestObject;

    public function create(Request $request)
    {
//        dump($request);
        $requestObject = $this->extractRequestObject($request);

        $list = $requestObject['list'];
        if (((Boolean)$request['filterWithBranch'] === true) && !isset($request['branchId']))
            $requestObject['branchId'] = auth('api')->user()->branch_id;

        $reminderList = $list == SELF::PROMISE_CALL_LIST ?
            $this->fetchPromiseCallRemindersList($requestObject) :
            $this->fetchRemindersListByRequestList($requestObject);
        dump($reminderList[0]);
        if (isset($list) && !in_array($list, SELF::FIRST_SMS_AND_PROMISE_CALL)) {
            $reminderList = json_decode(json_encode($reminderList, true));
            $reminderList = array_filter($reminderList, function ($order) use ($list, $requestObject) {
                if (!SELF::isOrderRepaymentDetailValid($order)) return false;
                $lastMissedRepaymentDate = SELF::getFirstMissedPaymentDate($order);
                $repaymentDatesArr = SELF::getPossibleRepaymentDatesForASuppliedDate($requestObject);
                return in_array($lastMissedRepaymentDate, $repaymentDatesArr);
            });
        }
        dd($reminderList);
        return response()->json([
            'orders' => $reminderList
        ]);
    }

    public function fetchPromiseCallRemindersList($requestObject)
    {
        return PromiseCall::select('order_id', 'date')
            ->dateFilter('date', $requestObject)
            ->when(isset($requestObject['filterWithBranch']),
                function ($q1) use ($requestObject) {
                    return $q1->whereHas("order", function ($query2) use ($requestObject) {
                        return $query2->whereHas("storeProduct", function ($query3) use ($requestObject) {
                            $query3->where("store_name", "=", $requestObject['branchId']);
                        });
                    });
                }
            )
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
        return Order::when(isset($requestObject['list']),
            function ($query2) {
                return $query2->where('status_id', Self::ORDER_STATUS_OK);
            })
            ->when(isset($requestObject['direct-debit']), function ($query3) {
                return $query3->where('payment_method_id', Self::DIRECT_DEBIT_PAYMENT_METHOD);
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
