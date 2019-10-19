<?php

namespace App\Http\Controllers;

use App\Helper\OrderConstants;
use App\Helper\OrderObject;
use App\Order;
use App\PromiseCall;
use DateTime;
use Illuminate\Http\Request;

class ReminderController extends Controller implements OrderConstants
{
    /*public function create()
    {
        //1. get currently logged in user
        $user = auth('api')->user();

        //2. Extract the list number sent from the user
        $list = request('list');
        if (request('overdue_days')) $list = 'overdue';

        //3. Prepare a request object that can be access
        //from all level of the method
        $request = [
            'overdue_days' => request('overdue_days'),
            'list' => $list,
            'page' => request('page'),
            'page_size' => request('page_size'),
            'branch_id' => request('branch_id'),
            'date_from' => request('date_from'),
            'date_to' => request('date_to'),
        ];

        //4. chcek type of list requested
        if ($list == '8') {

            //4a. if the customer requested for the list of promise call
            //fetch the list from the promise call table
            $result = PromiseCall::select('id','order_id','date')
                ->dateFilter('date', $list, $this, $request)
                ->with(['order' => function ($query) {
                    return $query->orderWithOtherTables();
                }])
                ->getOrPaginate($request);
        } else {

            //4b. if the not promise call
            //fetch list from the orders table
            $result = Order::dateFilter('order_date', $list, $this, $request)
                ->orderWithOtherTables($request)
                ->getOrPaginate($request);
        }

        return response()->json([
            'dva_id' => $user->id,
            'branch' => $user->branch_id,
            'orders' => $result
        ]);
    }*/

    use OrderObject;

    public function create(Request $req)
    {
        $requestObject = [
            'list' => $req['list'],
            'page' => $req['page'],
            'dateTo' => $req['dateTo'],
            'dateFrom' => $req['dateFrom'],
            'pageSize' => $req['pageSize'],
            'branchId' => $req['branchId'],
            'overdueDays' => $req['overdueDays']
        ];

        $user = auth('api')->user();

        if ($req['filerWithBranch'] === true && !isset($req['branchId']))
            $requestObject['branchId'] = $user->branch_id;

        isset($requestObject['overdueDays']) && $requestObject['list'] = 'overdue';

        $list = $requestObject['list'];

        $result = $list == '8' ?
            $this->fetchPromiseCallRemindersList($requestObject) :
            $this->fetchRemindersListByRequestList($requestObject);

        if (isset($list) && !in_array($list, [8, 1])) {

            $result = json_decode(json_encode($result, true));

            $result = array_filter($result, function ($order) use ($list) {

                $datePool = [];
                $payDay = null;
                $dayInterval = null;
                $accumulatedDays = date("D") == "Mon" || in_array($list, Self::COLLECTIONS_LIST)
                    ? 3 : 1;

                if (!Self::doesOrderHaveValidRepaymentDetail($order)) return false;

                extract(Self::getCountAndInterval($order));

                for ($i = 1; $i < ($count + 1); $i++) {
                    $column = Self::getColumn($i);
                    $repaymentData = Self::getRepaymentData($order);
                    $col = $column . "_pay";
                    if (!isset($repaymentData->$col)) {
                        $payDay = Self::generateDueDates($order->order_date, $interval, $count)[$i - 1];
                        break;
                    }
                }

                $mode = Self::REMINDER_TYPES[$list]['mode'];
                $dayInterval = Self::REMINDER_TYPES[$list]['dayInterval'];

                if (in_array($mode, ["collection", "recovery", "call", "external-recovery"])) {
                    for ($p = 0; $p < $accumulatedDays; $p++) {
                        $date = (new DateTime())->modify('-' . ($p + $dayInterval) . ' day')->format('Y-m-d');
                        array_push($datePool, $date);
                    }
                }

                if ($mode === 'sms') {
                    for ($p = 0; $p < $accumulatedDays; $p++) {
                        $date = (new DateTime())->modify('+' . ($p + $dayInterval) . ' day')->format('Y-m-d');
                        array_push($datePool, $date);
                    }
                }

                return in_array($payDay, $datePool);
            });
        }

        return response()->json([
            'count' => count($result),
            'orders' => $result
        ]);
    }

    public function fetchPromiseCallRemindersList($requestObject)
    {
        return PromiseCall::select('id', 'order_id', 'date')
            ->dateFilter('date', $requestObject)
            ->with(['order' => function ($query) use ($requestObject) {
                return $query->orderWithOtherTables($requestObject);
            }])
            ->getOrPaginate($requestObject);
    }

    public function fetchRemindersListByRequestList($requestObject)
    {
        return Order::dateFilter('order_date', $requestObject)
            ->orderWithOtherTables($requestObject)
            ->getOrPaginate($requestObject);
    }
}