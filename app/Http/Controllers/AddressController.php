<?php

namespace App\Http\Controllers;

use App\Address;
use App\Customer;
use App\Verification;
use Illuminate\Http\Request;

class AddressController extends Controller
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
            'form' => Address::form(),
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
        $address = Address::where('customer_id', $request->customer_id)->get();
        if ($address->count()) {
            return response()->json([
                'message' => 'Sorry this users has already been declined!'
            ], 428);
        } else {
            (new Address($request->all()))->save();
        }
        Verification::where('customer_id', '=', $request->customer_id)->update([
            'address_status' => $request->approval_status,
        ]);
        $customer = Customer::with([
            'branch' => function ($query) {
                $query->select('id', 'name');
            },
            'user' => function ($query) {
                $query->select('id', 'full_name');
            },
            'verification', 'address'
        ])->where('id', $request->customer_id)->first();
        return response()->json([
            'approved' => true,
            'customer' => $customer,
            'emptyForm' => Address::form(),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Address $address
     * @return \Illuminate\Http\Response
     */
    public function show(Address $address)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Address $address
     * @return \Illuminate\Http\Response
     */
    public function edit(Address $address)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Address $address
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Address $address)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Address $address
     * @return \Illuminate\Http\Response
     */
    public function destroy(Address $address)
    {
        //
    }
}
