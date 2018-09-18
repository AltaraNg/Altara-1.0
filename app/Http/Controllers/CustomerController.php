<?php

namespace App\Http\Controllers;

use App\Branch;
use App\Customer;
use App\State;
use Illuminate\Http\Request;

class CustomerController extends Controller
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

        /*$customer = Customer::find(1);

        unset($customer['id']);

        $customer['days_of_work'] = explode(' ', $customer['days_of_work']);*/

        //remove code above after testing

        $user = auth('api')->user();

        $states = State::all();

        $form = Customer::form();

        $branches = Branch::all();

        $form['employee_name'] = $user->full_name;

        $form['employee_phone_number'] = $user->phone_number;

        return response()->json([

            'form' => $form,

            //'form' => $customer,

            'states' => $states,

            'branches' => $branches,

        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $customer = new Customer($request->all());

        $customer->days_of_work = implode(' ', $request['days_of_work']);

        $customer->user_id = auth('api')->user()->id;

        $customer->save();

        $form = Customer::form();

        return response()->json([

            'registered' => true,

            'form' => $form,

        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
