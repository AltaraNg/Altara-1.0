<?php

namespace App\Http\Controllers;

use App\Document;
use App\Verification;
use File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DocumentController extends Controller
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

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            $request['document'] => 'image|max:512|dimensions:max_width=1200,max_height=1200'
        ]);
        $document = Document::findOrFail($id);
        if ($request->hasFile($request['document']) && $request->file($request['document'])->isValid()) {
            $image = $request->file($request['document']);
            $filename = $request['document'] . '/' . $this->getFileName($request[$request['document']]);
            $s3 = Storage::disk('s3');
            $s3->put($filename, file_get_contents($image), 'public');
            $document[$request['document'] . '_url'] = $filename;
            $document->user_id= auth('api')->user()->id;
            $document->staff_name= auth('api')->user()->full_name;
            $document->save();
            $verification = Verification::where('customer_id', $document->customer_id)->first();
            $verification[$request['document']] = 1;
            $verification->save();
        }
        return response()->json([
            'response' => app('App\Http\Controllers\CustomerController')->show($document->customer_id)->original
        ]);
    }

    protected function getFileName($file)
    {
        return str_random(32) . '.' . $file->extension();
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
