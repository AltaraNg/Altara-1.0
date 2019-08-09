<?php

namespace App\Http\Controllers;

use App\Bank;
use App\Order;
use App\PaymentMethod;
use App\PromiseCall;
use App\Reminder;
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

    public function getDateForReminder($list, $request)
    {
        //1. get the current date
        $today = date('Y-m-d');

        //this array hold all the list for the recovery and collections
        $collectionsList = [9, 10, 11, 12, 13, 14];

        //2. if the day of the week is monday, set count to 3 else set it to 1
        //Count is used to run a loop. in the simplest form: The guide for the reminder feature is that once the current
        //day is monday you pull the reminders due for SATURDAY, SUNDAY and MONDAY(THE CURRENT DAY).
        //by soo doing no reminders for the weekends are skipped.
        $count = (date("D") == "Mon" || in_array($list, $collectionsList)) ? 3 : 1;

        //for recovery and collections $count is always 3.
        if ($list)

            //3. create an array that will hold the lists of all the
            // possible dates for a particular reminder
            $informal = [];

        //4. initialize a day variable.
        // ::>case1: when the value of this variable(and its multiples from 2 through 12 or 6) is subtracted from the current day,
        //the resultant days are all the possible dates for the current reminder being queried for.
        //NB: the 12 and 6 used on  ::>case1: indicated 12 repayment, i.e 1 repayment every 2 weeks
        //(i.e 2 repayment per month) for 6 months(2/month * 6 = 12)
        //NB: the 12 and 6 used on  ::>case1: indicated 6 repayment, i.e 1 repayment every 1 month
        //(we use 28 days as 1 month)(i.e 1 repayment per month) for 6 months(1/month * 6 = 6)
        $days = 0;

        //if(isset($request['overdue_days']) && $list == null) $list = 'overdue';

        //5. check the list being requested for by the user. and assign
        //the correct values to the $day variable.
        //for a reference of how the number came about ask for the collection app brief.
        //it contains a comprehensive list of all the reminders and
        //the date difference for each of them
        switch ($list) {
            case 'overdue':
                $days = $request['overdue_days'];
                $count = 1;
                break;
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

            case 9://collections visit: 1
                $days = 38;
                break;
            case 10://collections visit: 2
                $days = 45;
                break;

            case 11://recovery visit: 1
                $days = 61;
                break;
            case 12://recovery visit: 2
                $days = 75;
                break;
            case 13://recovery visit: 2
                $days = 90;
                break;

            case 14://external recovery - lawyer visit: 2
                $days = 121;
                break;

            default://sms reminder: 1 and promise call 8
                //NB:: The promise call reminder is not included in the
                //app brief at the time of this documentation.
                //it was added along the line of development

                //the loop below will run for 1 or 3 times
                //eg. if today is tuesday the $informal will only contain today - 0 days = today.
                //if count 3(ie today is monday) $informal will contain today,
                // yesterday(saturday) and the day before(sunday)
                for ($j = 0; $j < $count; $j++)
                    $informal[$j] = date('Y-m-d', strtotime($today . ' - ' . $j . ' days'));
                return $informal;
        }

        //The first loop below will run for 1 or 3 times
        for ($a = 0; $a < $count; $a++) {

            //case 1st reminder as example - $days = 7
            //eg. if today is tuesday ie. $count = 1, the $informal will only contain today - (0 + 7days) = last tuesday.
            //else
            //if $count = 3(ie today is monday) $informal will contain last monday,
            //last two saturday and last two sunday
            $informal[$a] = [date('Y-m-d', strtotime($today . ' - ' . ($a + $days) . ' days'))];

            //The loop below will run for 12 times
            //if today is tuesday. it will get the first element of $informal array. and keep
            //subtracting 14 days for 12 to get all the possible days for that reminder
            //else
            //if count = 3. it will still repeat thr process but for the 3 elements in the $informal array.
            for ($i = 1; $i < 12; $i++) $informal[$a][$i] = date('Y-m-d', strtotime($informal[$a][$i - 1] . ' - 14 days'));
        }

        //$dateArr = $count == 3 ? array_merge($informal[0], $informal[1], $informal[2]) : $informal[0];
        //$dateArr = $count == 3 ? array_merge($informal/*[0], $informal[1], $informal[2]*/) : $informal[0];
        //$dateArr = array_merge($informal/*[0], $informal[1], $informal[2]*/);
        //$dateArr = array_merge($informal/*[0], $informal[1], $informal[2]*/);

        $dateArr = $count == 3 ? call_user_func_array('array_merge', $informal) : $informal[0];

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
            //'payment_methods' => PaymentMethod::all(),
            //'banks' => Bank::all(),
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
        Reminder::insert($request->reminders);
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