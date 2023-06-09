<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Models\Customer;
use App\Models\NewDocument;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class NewDocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $new_documents = NewDocument::all();
        return $this->sendSuccess($new_documents->toArray(), 'Documents retrieved successfully');
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'document' => 'required|max:512|dimensions:max_width=1200,max_height=1200|mimes:jpeg,jpg,png,svg',
            'name' => 'required|string'
        ]);



        $document = new NewDocument;

        if ($request->hasFile('document') && $request->file('document')->isValid()) {


            $image = $request->file('document');


            $filename = 'customer' . '/' . $this->getFileName($request['document']);

            $s3 = Storage::disk('s3');

            $s3->put($filename, file_get_contents($image), 'public');

            $document->document_url = $filename;

            $document->user_id = auth('api')->user()->id;
            $document->name = $request['name'];
            $document->document_type = Helper::convertUnderscoreToCamelcase($request['name']);


            $customer = Customer::find($request['customer_id']);

            $customer->newDocuments()->save($document);
        }

        /** if the check 3 is not passed it return the record for the document with no changes
         * if 3 is passed the updated customer details is returned*/
        return response()->json([
            'response' => "Document uploaded successfully",
            'data' => $customer->newDocuments
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\NewDocument  $newDocument
     * @return \Illuminate\Http\Response
     */
    public function show(NewDocument $newDocument)
    {
        //
    }

    protected function getFileName($file)
    {
        /** generate a random string and append the file extension to the random string */
        return Str::random(32) . '.' . $file->extension();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\NewDocument  $newDocument
     * @return \Illuminate\Http\Response
     */
    public function edit(NewDocument $newDocument)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\NewDocument  $newDocument
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, NewDocument $newDocument)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\NewDocument  $newDocument
     * @return \Illuminate\Http\Response
     */
    public function destroy(NewDocument $newDocument)
    {
        //
    }
}
