<?php

namespace App\Http\Controllers;

use App\Log;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LogController extends Controller
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
      //
   }

   /**
    * Store a newly created resource in storage.
    *
    * @param Request $request
    * @return Response
    */
   public function store(Request $request)
   {
      /** this is used to capture every db related event a logged in user performs on the platform*/
      Log::create([
         'staff_id' => auth('api')->user()->staff_id,
         'description' => $request->description,
         'action' => $request->action,
      ]);
      return response()->json(['logged' => true]);
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
