<?php

namespace App\Http\Controllers;

use App\Inventory;
use App\Category;
use App\Brand;
use App\Product;
use App\Supplier;

use Illuminate\Http\Request;

class InventoryController extends Controller
{
    //
    public function index()
    {
        $model = Inventory::select('id', 'name','retail_price')->searchPaginateAndOrder();
        $columns = Inventory::$columns;
        return response()->json([
            'model' => $model,
            'columns' => $columns
        ]);
    }

    public function getInventory(){
        $inventory = Inventory::all();
        return response()->json([
            'products'=> $inventory,
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
        $products = Product::all();
        $suppliers = Supplier::all();
        return response()->json([
            'brands' => $brands,
            'categories' => $categories,
            'products' => $products,
            'suppliers' => $suppliers
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
        $inventory = new Inventory($request->all());
        $inventory->save();
        return response()->json([
            'saved' => true,
            'message' => 'Product Created!',
            'form' => Inventory::form(),
            'log' => 'ProductCreated'
        ]);

    }
}
