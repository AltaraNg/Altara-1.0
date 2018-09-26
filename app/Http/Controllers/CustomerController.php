<?php

namespace App\Http\Controllers;

use App\Address;
use App\Branch;
use App\Customer;
use App\State;
use App\Verification;
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
        $user = auth('api')->user();
        $states = State::all();
        $form = Customer::form();
        $branches = Branch::all();
        $form['employee_name'] = $user->full_name;
        $form['employee_phone_number'] = $user->phone_number;
        return response()->json([
            'form' => $form,
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
        (new Verification([
            'user_id' => auth('api')->user()->id,
            'customer_id' => $customer->id,
            'passport' => 0,
            'id_card' => 0,
            'address_status' => 0,
            'work_guarantor_status' => 0,
            'personal_guarantor_status' => 0,
        ]))->save();
        return response()->json([
            'registered' => true,
            'form' => Customer::form(),
            'id' => $customer->id,
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
        $customer = Customer::with([
            'branch' => function ($query) {
                $query->select('id', 'name');
            },
            'user' => function ($query) {
                $query->select('id', 'full_name');
            },
            'verification', 'address'
        ])->where('id', $id)->first();
        if ($customer) {
            return response()->json([
                'customer' => $customer,
                'emptyForm' => Address::form(),
            ]);
        }
        return response()->json([
            'message' => 'The Customer ID did not match any customer in our records!',
        ], 422);
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