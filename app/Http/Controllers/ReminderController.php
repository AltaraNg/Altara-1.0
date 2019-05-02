<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Purchase;
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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //return 1;

        $result = Purchase::where('order_date', '=', date('Y-m-d'))->with
        (['repayment', 'reminders',
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
                    'employment_status');
            }])->get();


        return response()->json([
            'data' => $result
        ]);


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Reminder  $reminder
     * @return \Illuminate\Http\Response
     */
    public function show(Reminder $reminder)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Reminder  $reminder
     * @return \Illuminate\Http\Response
     */
    public function edit(Reminder $reminder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Reminder  $reminder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reminder $reminder)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Reminder  $reminder
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reminder $reminder)
    {
        //
    }
}
