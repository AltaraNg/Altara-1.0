<?php

namespace App\Http\Controllers;

use App\Brand;
use App\Category;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Product::select('id', 'name','retail_price')->searchPaginateAndOrder();
        $columns = Product::$columns;
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
        $brands = Brand::all();
        $categories = Category::all();
        return response()->json([
            'brands' => $brands,
            'form' => Product::form(),
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:products',
            'brand_id' => 'required|int',
            'category_id' => 'required|int',
            'retail_price' => 'required|int',
        ]);
        $user = auth('api')->user();
        $request->user_id = $user->id;
        $product = new Product($request->all());
        $product->save();
        return response()->json([
            'saved' => true,
            'message' => 'Product Created!',
            'form' => Product::form(),
            'staff_id' => $user->staff_id,
            'log' => 'ProductCreated'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $brands = Brand::all();
        $categories = Category::all();
        $form = Product::findOrFail($id);
        return response()->json([
            'form' => $form,
            'brands' => $brands,
            'categories' => $categories,
        ]);
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
        $request->validate([
            'name' => 'required|unique:products,name,' . $id,
            'brand_id' => 'required|int',
            'category_id' => 'required|int',
            'retail_price' => 'required|int',
        ]);
        Product::whereId($id)->update($request->all());
        return response()->json([
            'updated' => true,
            'message' => 'Product Updated!',
            'staff_id' => auth('api')->user()->staff_id,
            'log' => 'ProductUpdated'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
