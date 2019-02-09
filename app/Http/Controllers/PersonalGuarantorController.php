<?php

namespace App\Http\Controllers;

use App\PersonalGuarantor;
use App\Verification;
use Illuminate\Http\Request;

class PersonalGuarantorController extends Controller
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
      /** return empty personal guarantor object form*/
      return response()->json(['form' => PersonalGuarantor::form()]);
   }

   /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request $request
    * @return \Illuminate\Http\Response
    */
   public function store(Request $request)
   {
      /** fetch the personal guarantor with the customer_id on the $request*/
      $personalGuarantor = PersonalGuarantor::where('customer_id', $request->customer_id)->get();
      /** NB::The control statement below is so because once a personal guarantor, linked to a customer is created on the personal_guarantor
       * table it means that the customer's personal guarantor have be approved or declined and any other attempt means the customer
       * is trying to bypass the previous approval or decline, hence the response with code 428 */
      if ($personalGuarantor->count()) {
         /** if the customers personal guarantor(actually this is personal guarantor report record) exists,
          * that means the customers address have been processed before*/
         return response()->json(['message' => 'Sorry this users has already been declined!'], 428);
      } else (new PersonalGuarantor($request->all()))->save();
      /**else create a personal guarantor report for the customer and save*/
      /** after creating personal guarantor report update the personal_guarantor column in the verification table to the approval
       * status sent from the request($request->consent can be 0 or 1 as the case may be) */
      Verification::where('customer_id', '=', $request->customer_id)->update(['personal_guarantor' => $request->consent]);
      /** return the customer with all his/her details*/
      return response()->json([
         'response' => app('App\Http\Controllers\CustomerController')->show($request->customer_id)->original
      ]);
   }

   /**
    * Display the specified resource.
    *
    * @param  \App\PersonalGuarantor $personalGuarantor
    * @return \Illuminate\Http\Response
    */
   public function show(PersonalGuarantor $personalGuarantor)
   {
      //
   }

   /**
    * Show the form for editing the specified resource.
    *
    * @param  \App\PersonalGuarantor $personalGuarantor
    * @return \Illuminate\Http\Response
    */
   public function edit(PersonalGuarantor $personalGuarantor)
   {
      //
   }

   /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request $request
    * @param  \App\PersonalGuarantor $personalGuarantor
    * @return \Illuminate\Http\Response
    */
   public function update(Request $request, PersonalGuarantor $personalGuarantor)
   {
      //
   }

   /**
    * Remove the specified resource from storage.
    *
    * @param  \App\PersonalGuarantor $personalGuarantor
    * @return \Illuminate\Http\Response
    */
   public function destroy(PersonalGuarantor $personalGuarantor)
   {
      //
   }
}
