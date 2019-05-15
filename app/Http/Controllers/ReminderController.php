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

    public static function getDateForReminder($list)
    {
        //$date = date('Y-m-d');
        $date = '2019-04-23';
        switch ($list) {
            case 2:
                return date('Y-m-d', strtotime($date . ' - 7 days'));
            case 3:
                return date('Y-m-d', strtotime($date . ' - 1 month'));
            default:
                return $date;
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function create()
    {

        $result = Order::where('order_date', '=', $this->getDateForReminder(request('list')))->with
        (['repayment', 'repaymentFormal', 'repaymentInformal', 'storeProduct', 'discount', 'reminders' => function ($query) {
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
            'dva_id' => auth('api')->user()->id,
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
