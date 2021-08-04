<?php

namespace App\Http\Controllers;

use App\Events\OldRepaymentEvent;
use App\Order;
use App\PaymentType;
use App\Repayment;
use App\RepaymentFormal;
use App\RepaymentInformal;
use App\Rules\Money;
use Illuminate\Http\Request;

class RepaymentController extends Controller
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
        $this->validate($request, [
            'order_id' => 'required|exists:orders,id',
            'amount' => ['required', new Money],
        ]);
        $amortization = null;

        switch ($request->type) {
            case 'formal':
                $amortization = RepaymentFormal::where('repayment_id', $request->repayment_id)->first();
                break;

            case 'informal':
                $amortization = RepaymentInformal::where('repayment_id', $request->repayment_id)->first();
                break;
        }

        $amortization->update($request->payments);

        $paymentType = PaymentType::where('type', PaymentType::REPAYMENTS)->first()->id;
        $order = Order::findOrFail($request->order_id);
        $order->amount = $request->amount;
        $order->payment_type_id = $paymentType;
        $order->payment_method_id = $request->payment_method_id;
        event(new OldRepaymentEvent($order));



        return response()->json([
            'saved' => true,
            'amortization' =>  $amortization->refresh()
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Repayment  $repayment
     * @return \Illuminate\Http\Response
     */
    public function show(Repayment $repayment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Repayment  $repayment
     * @return \Illuminate\Http\Response
     */
    public function edit(Repayment $repayment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Repayment  $repayment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Repayment $repayment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Repayment  $repayment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Repayment $repayment)
    {
        //
    }
}
