<?php

namespace App\Http\Controllers;

use App\Document;
use App\Verification;
use File;
use Illuminate\Http\Request;

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
        $this->validate($request, [$request['document'] => 'image']);
        $document = Document::findOrFail($id);
        if ($request->hasFile($request['document']) && $request->file($request['document'])->isValid()) {
            $filename = $this->getFileName($request[$request['document']]);
            $request[$request['document']]->move(base_path('public/images'), $filename);
            $document[$request['document'] . '_url'] = $filename;
        }
        $document->save();
        $verification = Verification::where('customer_id', $document->customer_id)->first();
        $verification[$request['document']] = 1;
        $verification->save();

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
