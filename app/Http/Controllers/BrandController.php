<?php

namespace App\Http\Controllers;

use App\Brand;
use App\Services\Logistics\BrandService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

/**
 * @property BrandService brandService
 */
class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param BrandService $brandService
     */
    protected $brandService;
   public function __construct(BrandService $brandService)
   {
       $this->brandService = $brandService;
       $this->middleware('auth:api');

   }

    public function index()
   {

       $columns = Brand::$columns;
       $model = $this->brandService->getBrands();
       if($model == null){

       }
       return response()->json([
           'model' => $this->brandService->getBrands(),
           'columns' => $columns
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
       if(!empty($request) && $request != null){
           $this->brandService->storeBrand($request);
           return response()->json([
               'saved' => true,
               'message' => 'Brand Created!',
               'form' => Brand::form(),
               'staff_id' => auth('api')->user()->staff_id,
               'log' => 'BrandCreated'
           ]);
       }
       return response()->json([
           'saved' => false,
           'message' => 'Invalid parameters'
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
