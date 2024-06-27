<?php

namespace App\Http\Controllers;

use App\Events\CustomerStageUpdatedEvent;
use App\Models\CustomerStage;
use App\Models\ProcessingFee;
use App\Models\Verification;
use App\Repositories\ContactCustomerRepository;
use Illuminate\Http\Request;

class ProcessingFeeController extends Controller
{
    private $contactRepo;

    public function __construct(ContactCustomerRepository $contactRepository)
    {
        $this->contactRepo = $contactRepository;
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
      /** return form for processing fee creation*/
      return response()->json(['form' => ProcessingFee::form()]);
   }

   /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request $request
    * @return \Illuminate\Http\Response
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
     $verification = Verification::where('customer_id', '=', $request->customer_id)->update(['processing_fee' => 1]);
     if ($verification){
         $customer_contact = $this->contactRepo->getByID($request->customer_id);
         $contact_customer = $this->contactRepo->update($customer_contact, ['customer_stage_id' => CustomerStage::where('name', CustomerStage::AFFIDAVIT)->first()->id]);
         if ($contact_customer->wasChanged('customer_stage_id')) {
             event(new CustomerStageUpdatedEvent($customer_contact->refresh()));
         }
     }
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
