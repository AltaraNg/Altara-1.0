<?php

namespace App\Http\Controllers;

use App\AltaraPayReport;
use Illuminate\Http\Request;

class AltaraPayReportController extends Controller
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
      $form = AltaraPayReport::form();
      /** return the form, states, and banks*/
      return response()->json([
         'form' => $form
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
        // $request->validate(['name' => 'required|unique:brands']);
        $report = new AltaraPayReport($request->all());
 
        $report->save();
 
 
        return response()->json([
            'saved' => true,
            'message' => 'Report Submitted Created!',
            'form' => AltaraPayReport::form(),
            'staff_id' => auth('api')->user()->staff_id,
            'log' => 'Report Submitted Created'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AltaraPayReport  $altaraPayReport
     * @return \Illuminate\Http\Response
     */
    public function show(AltaraPayReport $altaraPayReport)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AltaraPayReport  $altaraPayReport
     * @return \Illuminate\Http\Response
     */
    public function edit(AltaraPayReport $altaraPayReport)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AltaraPayReport  $altaraPayReport
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AltaraPayReport $altaraPayReport)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AltaraPayReport  $altaraPayReport
     * @return \Illuminate\Http\Response
     */
    public function destroy(AltaraPayReport $altaraPayReport)
    {
        //
    }
}
