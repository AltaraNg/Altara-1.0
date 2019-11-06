<?php

namespace App\Http\Controllers;

use App\Repayment;
use App\RepaymentFormal;
use App\RepaymentInformal;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RepaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $amortization = null;

        switch ($request->type){
            case 'formal':
                $amortization = RepaymentFormal::where('repayment_id', $request->repayment_id)->first();
                break;

            case 'informal':
                $amortization = RepaymentInformal::where('repayment_id', $request->repayment_id)->first();
                break;
        }

        $amortization->update($request->payments);

        return response()->json([
            'saved' => true,
            'amortization' =>  $amortization->refresh()
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Repayment $repayment
     * @return Response
     */
    public function show(Repayment $repayment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Repayment $repayment
     * @return Response
     */
    public function edit(Repayment $repayment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Repayment $repayment
     * @return Response
     */
    public function update(Request $request, Repayment $repayment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Repayment $repayment
     * @return Response
     */
    public function destroy(Repayment $repayment)
    {
        //
    }
}
