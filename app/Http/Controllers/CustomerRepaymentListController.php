<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ReminderService;

class CustomerRepaymentListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    private $reminder_service;

    public function __construct(ReminderService $reminder_service)
    {
        $this->reminder_service = $reminder_service;
    }
    public function index(Request $request)
    {
        //

        $validated_data = $request->validate([
            'days' => 'required|integer|gt:0'
        ]);
        $order_list = $this->reminder_service->fetchOrders($validated_data['days']);
        return $this->sendSuccess($order_list->toArray(), 'List Successfully Generated');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
