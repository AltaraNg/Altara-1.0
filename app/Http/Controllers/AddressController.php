<?php

namespace App\Http\Controllers;

use App\{Address,Verification};
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AddressController extends Controller
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
       /** return form for address creation*/
        return response()->json([
            'form' => Address::form()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
       /** fetch the address with the id passed from the request*/
        $address = Address::where('customer_id', $request->customer_id)->get();
        /** NB::The control statement below is so because once an address linked to a customer is created on the address table
         * it means that the customer's address have be approved or declined and any other attempt means the customer
         * is trying to bypass the previous approval or decline, hence the response with code 428 */

        if ($address->count()) {
           /** if the customer address(actually this is an address questionnaire for verifications process) exists,
            * that means the customer address have been processed before*/
            return response()->json(['message' => 'Sorry this customer has already been declined!'], 428);

        } else (new Address($request->all()))->save();
        /**else create an address for the customer and save*/

        /** after creating address update the address column in the verification table to the approval
         * status sent from the request(0 or 1 as the case may be) */
        Verification::where('customer_id', '=', $request->customer_id)->update(['address' => $request->approval_status]);

        /** return the customer with all his/her details*/
        return response()->json([
            'response' => (new CustomerController)->show($request->customer_id)->original
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Address $address
     * @return Response
     */
    public function show(Address $address)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Address $address
     * @return Response
     */
    public function edit(Address $address)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Address $address
     * @return Response
     */
    public function update(Request $request, Address $address)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Address $address
     * @return Response
     */
    public function destroy(Address $address)
    {
        //
    }
}
