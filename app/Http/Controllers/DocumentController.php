<?php

namespace App\Http\Controllers;

use App\CustomerStage;
use App\Document;
use App\Events\CustomerStageUpdatedEvent;
use App\Http\Filters\ContactCustomerFilter;
use App\Repositories\ContactCustomerRepository;
use App\Verification;
use File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class DocumentController extends Controller
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
      //
   }

   /**
    * Display the specified resource.
    *
    * @param  \App\Document $document
    * @return \Illuminate\Http\Response
    */
   public function show(Document $document)
   {
      //
   }

   /**
    * Show the form for editing the specified resource.
    *
    * @param  \App\Document $document
    * @return \Illuminate\Http\Response
    */
   public function edit(Document $document)
   {
      //
   }

   /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request $request
    * @param  \App\Document $document
    * @return \Illuminate\Http\Response
    */

   public function update(Request $request, $id,  ContactCustomerFilter $contactCustomerFilter)
   {
      /** 1. Validate the document(image) */
      $this->validate($request, [
         $request['document'] => 'max:512|dimensions:max_width=1200,max_height=1200|mimes:jpeg,jpg,png,svg'
      ]);

      /**NB the $request['document'] field is not the document rather the document type - passport or id card.
       * this is to make sure both document use this same function for upload*/

      /** 2. fetch the customer's document record*/
      $document = Document::findOrFail($id);

      /** 3. Check if the request has a document field which is a file and if exists it should be valid too*/
      if ($request->hasFile($request['document']) && $request->file($request['document'])->isValid()) {

         /** 3.a if check 3 is passed*/
         /** get the image and assign to a variable */
         $image = $request->file($request['document']);

         /** Generate the file name(eg for passport name will be
          * passport/[randomStringGeneratedFromTheFunctionCall->getFileName]) */
         $filename = $request['document'] . '/' . $this->getFileName($request[$request['document']]);

         /** the storage link*/
         $s3 = Storage::disk('s3');

         /** store the document in s3*/
         $s3->put($filename, file_get_contents($image), 'public');

         /** update the document_url(eg passport_url, id_url) to the filename generated*/
         $document[$request['document'] . '_url'] = $filename;

         /** update the document user_id to the current user(the person that uploaded the document)*/
         $document->user_id = auth('api')->user()->id;

         /** also update the staff_name field*/
         $document->staff_name = auth('api')->user()->full_name;

         /** save the updated instance*/
         $document->save();

         /** update the verification field(passport) for passport if the $request['document'] is = passport and the other for id and
          * set the value of the field to 1 meaning that the document has been updated*/
         /** fetch customer verification record*/
         $verification = Verification::where('customer_id', $document->customer_id)->first();

         /** update the record*/
         $verification[$request['document']] = 1;
         if ($verification->id_card ==1 && $verification->passport == 1){
             $customer_contact = $this->contactRepo->query($contactCustomerFilter)->where('id', $document->customer_id)->first();
             $contact_customer = $this->contactRepo->update($customer_contact, ['customer_stage_id' => CustomerStage::where('name', CustomerStage::KYC)->first()->id]);
             if ($contact_customer->wasChanged('customer_stage_id')) {
                 event(new CustomerStageUpdatedEvent($customer_contact->refresh()));
             }
         }

         /** save the record*/
         $verification->save();
      }

      /** if the check 3 is not passed it return the record for the document with no changes
       * if 3 is passed the updated customer details is returned*/
      return response()->json([
         'response' => (new CustomerController)->show($document->customer_id)->original
      ]);
   }

   protected function getFileName($file)
   {
      /** generate a random string and append the file extension to the random string */
      return Str::random(32) . '.' . $file->extension();
   }

   /**
    * Remove the specified resource from storage.
    *
    * @param  \App\Document $document
    * @return \Illuminate\Http\Response
    */
   public function destroy(Document $document)
   {
      //
   }
}
