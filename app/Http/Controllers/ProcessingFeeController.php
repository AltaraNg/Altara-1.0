<?php

namespace App\Http\Controllers;

use App\ProcessingFee;
use App\Verification;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProcessingFeeController extends Controller
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
      /** return form for processing fee creation*/
      return response()->json(['form' => ProcessingFee::form()]);
   }

   /**
    * Store a newly created resource in storage.
    *
    * @param Request $request
    * @return Response
    */
   public function store(Request $request)
   {
      /** fetch the processing with the id passed from the request*/
      $processingFee = ProcessingFee::where('customer_id', $request->customer_id)->get();
      /** NB::The control statement below is so because once aa processing fee linked to a customer is created on the processing fee table
       * it means that the customer's processing fee has be approved and any other attempt means the customer
       * is trying to bypass the previous approval or decline, hence the response with code 428 */
      if ($processingFee->count()) {
         /** if the customer processing fee exists, that means the customer processing fee has been processed before*/
         return response()->json(['message' => 'Sorry this users has already been declined!'], 428);
      } else (new ProcessingFee($request->all()))->save();
      /**else create a processing fee record for the customer and save*/
      /** after creating address update the address column in the verification table to the approval
       * status sent from the request(0 or 1 as the case may be) */
      Verification::where('customer_id', '=', $request->customer_id)->update(['processing_fee' => 1]);
      /** return the customer with all his/her details*/
      return response()->json([
         'response' => (new CustomerController)->show($request->customer_id)->original
      ]);
   }

   /**
    * Display the specified resource.
    *
    * @param  int $id
    * @return Response
    */
   public function show($id)
   {
      //
   }

   /**
    * Show the form for editing the specified resource.
    *
    * @param  int $id
    * @return Response
    */
   public function edit($id)
   {
      //
   }

   /**
    * Update the specified resource in storage.
    *
    * @param Request $request
    * @param  int $id
    * @return Response
    */
   public function update(Request $request, $id)
   {
      //
   }

   /**
    * Remove the specified resource from storage.
    *
    * @param  int $id
    * @return Response
    */
   public function destroy($id)
   {
      //
   }
}
