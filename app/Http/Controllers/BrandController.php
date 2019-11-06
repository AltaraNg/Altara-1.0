<?php

namespace App\Http\Controllers;

use App\Brand;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BrandController extends Controller
{
   /**
    * Display a listing of the resource.
    *
    * @return Response
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

   public function getBrands(){
       $brands = Brand::all();
       return response()->json([
           'brands'=> $brands
       ]);
   }

   /**
    * Show the form for creating a new resource.
    *
    * @return Response
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
    * @param Request $request
    * @return Response
    */
   public function store(Request $request)
   {
       $request->validate(['name' => 'required|unique:brands']);
       $brand = new Brand($request->all());

       $brand->name = ucwords(strtolower($request->name));

       $brand->save();


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
    * @param Brand $brand
    * @return Response
    */
   public function show(Brand $brand)
   {
      //
   }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Brand $id
     * @return Response
     */
   public function edit($id)
   {
       $form = Brand::findOrFail($id);
       return response()->json(['form' => $form]);
   }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param $id
     * @return Response
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
    * @param Brand $brand
    * @return Response
    */
   public function destroy(Brand $brand)
   {
      //
   }
}
