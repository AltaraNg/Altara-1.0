<?php

namespace App\Http\Controllers;

use App\Verification;
use Illuminate\Http\Request;

class VerificationController extends Controller
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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       /** fetch the verification with the customer_id passed in the request*/
        $verification = Verification::where([['id', $request->id], ['customer_id', $request->customer_id],])->first();
        /** unset the updated_at so it get the latest time NB:: by default this is not meant to be done manually but the updated at
         * and created at are not guarded because they are used in the front end hence are fetched alongside when ever
         * the record is called hence the need to manually unset and update to take the new update time */
        unset($verification['updated_at']);
        /** update record*/
        $verification->update($request->all());
        /** return the updated customer details*/
        return response()->json([
            'response' => app('App\Http\Controllers\CustomerController')->show($request->customer_id)->original
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Verification $verification
     * @return \Illuminate\Http\Response
     */
    public function show(Verification $verification)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Verification $verification
     * @return \Illuminate\Http\Response
     */
    public function edit(Verification $verification)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Verification $verification
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Verification $verification)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Verification $verification
     * @return \Illuminate\Http\Response
     */
    public function destroy(Verification $verification)
    {
        //
    }
}
