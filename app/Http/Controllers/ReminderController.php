<?php

namespace App\Http\Controllers;

use App\Attendance;
use App\Bank;
use App\Order;
use App\PaymentMethod;
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
        //
    }

    public function getDateForReminder($list)
    {
        //$today = date('Y-m-d');
        $today = '2018-12-11';
        $days = 0;
        switch ($list) {
            case 1://sms reminder: 1
                return [$today];
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
                $days = 21;
                break;
            case 7://call reminder: 4
                $days = 28;
                break;
            default:
                return [$today];
        }
        $informal = [date('Y-m-d', strtotime($today . ' - '.$days.' days'))];
        for ($i = 1; $i < 12; $i++) $informal[$i] = date('Y-m-d', strtotime($informal[$i - 1] . ' - 14 days'));
        return $informal;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function create()
    {
        $user = auth('api')->user();

        $result = Order::whereIn('order_date', $this->getDateForReminder(request('list')))->with
        (['repayment', 'repaymentFormal', 'repaymentInformal', 'storeProduct', 'discount', 'salesCategory', 'salesType', 'reminders' => function ($query) {
            return $query->with('user', 'sms');//remember to select only name and id here later
        },
            'floorAgent' => function ($q) {
                return $q->select('id', 'staff_id', 'full_name');
            },
            'customer' => function ($customerQ) {
                return $customerQ->select(
                    'id',
                    'branch_id',
                    'first_name',
                    'middle_name',
                    'last_name',
                    'add_nbstop',
                    'add_street',
                    'add_houseno',
                    'add_addinfo_description',
                    'city',
                    'state',
                    'telephone',
                    'civil_status',
                    'employment_status')->with('branch');//remember to select only name and id here later
            }])->get();

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
