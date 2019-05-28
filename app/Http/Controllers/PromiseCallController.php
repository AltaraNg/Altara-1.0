<?php

namespace App\Http\Controllers;

use App\PromiseCall;
use Illuminate\Http\Request;

class PromiseCallController extends Controller
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
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        PromiseCall::create($request->all());
        return response()->json([
            "saved" => true
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\PromiseCall $promiseCall
     * @return \Illuminate\Http\Response
     */
    public function show(PromiseCall $promiseCall)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\PromiseCall $promiseCall
     * @return \Illuminate\Http\Response
     */
    public function edit(PromiseCall $promiseCall)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\PromiseCall $promiseCall
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PromiseCall $promiseCall)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\PromiseCall $promiseCall
     * @return \Illuminate\Http\Response
     */
    public function destroy(PromiseCall $promiseCall)
    {
        //
    }
}
