<?php

namespace App\Http\Controllers;

use App\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{
   /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
   public function index()
   {
       $model = Brand::select('id','name')->searchPaginateAndOrder();
       $columns = Brand::$columns;
       return response()->json([
           'model' => $model,
           'columns' => $columns
       ]);
   }

   /**
    * Show the form for creating a new resource.
    *
    * @return \Illuminate\Http\Response
    */
   public function create()
   {
       return response()->json([
           'form' => Brand::form(),
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
       $request->validate(['name' => 'required|unique:brands']);
       $branch = new Brand($request->all());
       $branch->save();
       return response()->json([
           'saved' => true,
           'message' => 'Brand Created!',
           'form' => Brand::form(),
           'staff_id' => auth('api')->user()->staff_id,
           'log' => 'BrandCreated'
       ]);
   }

   /**
    * Display the specified resource.
    *
    * @param  \App\Brand $brand
    * @return \Illuminate\Http\Response
    */
   public function show(Brand $brand)
   {
      //
   }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Brand $id
     * @return \Illuminate\Http\Response
     */
   public function edit($id)
   {
       $form = Brand::findOrFail($id);
       return response()->json(['form' => $form]);
   }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param $id
     * @return \Illuminate\Http\Response
     */
   public function update(Request $request, $id)
   {
       $request->validate(['name' => 'required|unique:brands,name,' . $id]);
       Brand::whereId($id)->update($request->all());
       return response()->json([
           'updated' => true,
           'message' => 'Brand Updated!',
           'staff_id' => auth('api')->user()->staff_id,
           'log' => 'BrandUpdated'
       ]);
   }

   /**
    * Remove the specified resource from storage.
    *
    * @param  \App\Brand $brand
    * @return \Illuminate\Http\Response
    */
   public function destroy(Brand $brand)
   {
      //
   }
}
