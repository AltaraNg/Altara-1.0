<?php

namespace App\Http\Controllers;

use App\Verification;
use App\WorkGuarantor;
use Illuminate\Http\Request;

class WorkGuarantorController extends Controller
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
      /** return empty work guarantor object form*/

      return response()->json([

         'form' => WorkGuarantor::form(),

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
      /** fetch the work guarantor with the customer_id on the $request*/
      $workGuarantor = WorkGuarantor::where('customer_id', $request->customer_id)->get();
      /** NB::The control statement below is so because once a work guarantor, linked to a customer is created on the work_guarantor table
       * it means that the customer's work guarantor have be approved or declined and any other attempt means the customer
       * is trying to bypass the previous approval or decline, hence the response with code 428 */
      if ($workGuarantor->count()) {
         /** if the customers work guarantor(actually this is work guarantor report record) exists,
          * that means the customers address have been processed before*/
         return response()->json(['message' => 'Sorry this customer has already been declined!'], 428);
      } else (new WorkGuarantor($request->all()))->save(); /**else create a work guarantor report for the customer and save*/
      /** after creating work guarantor report update the work_guarantor column in the verification table to the approval
       * status sent from the request($request->consent can be 0 or 1 as the case may be) */
      Verification::where('customer_id', '=', $request->customer_id)->update(['work_guarantor' => $request->consent]);
      /** return the customer with all his/her details*/
      return response()->json([
         'response' => (new CustomerController)->show($request->customer_id)->original
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
