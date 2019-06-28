<?php

namespace App\Http\Controllers;

use App\Bank;
use App\Order;
use App\PaymentMethod;
use App\PromiseCall;
use App\Reminder;
use App\User;
use Illuminate\Http\Request;

class ReminderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    public function getDateForReminder($list)
    {
        $today = date('Y-m-d');
        $count = date("D") == "Mon" ? 3 : 1;
        $informal = [];
        $days = 0;
        switch ($list) {
            case 2://sms reminder: 2
                $days = 7;
                break;
            case 3://sms reminder: 3
                $days = 11;
                break;
            case 4://call reminder: 1
                $days = 14;
                break;
            case 5://call reminder: 2
                $days = 15;
                break;
            case 6://call reminder: 3
                $days = 19;//21;
                break;
            case 7://call reminder: 4
                $days = 31;
                break;
            default://sms reminder: 1 and  promise call
                for ($j = 0; $j < $count; $j++)
                    $informal[$j] = date('Y-m-d', strtotime($today . ' - ' . $j . ' days'));
                return $informal;
        }

        for ($a = 0; $a < $count; $a++) {
            $informal[$a] = [date('Y-m-d', strtotime($today . ' - ' . ($a + $days) . ' days'))];
            for ($i = 1; $i < 12; $i++) $informal[$a][$i] = date('Y-m-d', strtotime($informal[$a][$i - 1] . ' - 14 days'));
        }

        $dateArr = $count == 3 ? array_merge($informal[0], $informal[1], $informal[2]) : $informal[0];
        return $dateArr;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */

    public function create()
    {
        $user = auth('api')->user();

        $list = request('list');
        $request = [
            'list' => $list,
            'page' => request('page'),
            'page_size' => request('page_size'),
            'branch_id' => request('branch_id'),
            'date_from' => request('date_from'),
            'date_to' => request('date_to'),
        ];

        if ($list == '8') {
            $result = PromiseCall::dateFilter('date', $list, $this)
                ->with(['order' => function ($query) {
                    return $query->orderWithOtherTables();
                }])
                ->getOrPaginate($request);
        } else {
            $result = Order::dateFilter('order_date', $list, $this)
                ->orderWithOtherTables($request)
                ->getOrPaginate($request);
        }

        return response()->json([
            'payment_methods' => PaymentMethod::all(),
            'banks' => Bank::all(),
            'dva_id' => $user->id,
            'branch' => $user->branch_id,
            'orders' => $result
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $reminders = request('reminders');
        Reminder::insert($reminders);
        return response()->json(['saved' => true]);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Reminder $reminder
     * @return \Illuminate\Http\Response
     */
    public function show(Reminder $reminder)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Reminder $reminder
     * @return \Illuminate\Http\Response
     */
    public function edit(Reminder $reminder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Reminder $reminder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reminder $reminder)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Reminder $reminder
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reminder $reminder)
    {
        //
    }
}
