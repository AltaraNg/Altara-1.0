<?php

namespace App\Http\Controllers;

use App\ProcessingFee;
use App\Verification;
use Illuminate\Http\Request;

class ProcessingFeeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except('');
    }
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
        return response()->json([
            'form' => ProcessingFee::form(),
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
        $processingFee = ProcessingFee::where('customer_id', $request->customer_id)->get();
        if ($processingFee->count()) {
            return response()->json([
                'message' => 'Sorry this users has already been declined!'
            ], 428);
        } else (new ProcessingFee($request->all()))->save();
        Verification::where('customer_id', '=', $request->customer_id)->update(['processing_fee' => 1]);
        return response()->json([
            'response' => app('App\Http\Controllers\CustomerController')->show($request->customer_id)->original
        ]);
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
