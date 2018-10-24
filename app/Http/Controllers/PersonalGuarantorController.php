<?php

namespace App\Http\Controllers;

use App\PersonalGuarantor;
use App\Verification;
use Illuminate\Http\Request;

class PersonalGuarantorController extends Controller
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
            'form' => PersonalGuarantor::form(),
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
        $workGuarantor = PersonalGuarantor::where('customer_id', $request->customer_id)->get();
        if ($workGuarantor->count()) {
            return response()->json([
                'message' => 'Sorry this users has already been declined!'
            ], 428);
        } else (new PersonalGuarantor($request->all()))->save();
        Verification::where('customer_id', '=', $request->customer_id)->update(['personal_guarantor' => $request->consent]);
        return response()->json([
            'response' => app('App\Http\Controllers\CustomerController')->show($request->customer_id)->original
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PersonalGuarantor  $personalGuarantor
     * @return \Illuminate\Http\Response
     */
    public function show(PersonalGuarantor $personalGuarantor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PersonalGuarantor  $personalGuarantor
     * @return \Illuminate\Http\Response
     */
    public function edit(PersonalGuarantor $personalGuarantor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PersonalGuarantor  $personalGuarantor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PersonalGuarantor $personalGuarantor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PersonalGuarantor  $personalGuarantor
     * @return \Illuminate\Http\Response
     */
    public function destroy(PersonalGuarantor $personalGuarantor)
    {
        //
    }
}
