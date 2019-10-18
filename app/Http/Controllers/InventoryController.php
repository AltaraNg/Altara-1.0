<?php

namespace App\Http\Controllers;

use App\Inventory;
use App\Category;
use App\Brand;
use App\Product;
use App\Supplier;
use App\Branch;

use Illuminate\Http\Request;

class InventoryController extends Controller
{
    //
    public function index()
    {
        $model = Inventory::select('id', 'inventory_sku','market_price')->searchPaginateAndOrder();
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
        $branches = Branch::all();
        $categories = Category::all();
        $products = Product::all();
        $suppliers = Supplier::all();
        return response()->json([
            'brands' => $brands,
            'categories' => $categories,
            'products' => $products,
            'suppliers' => $suppliers,
            'branches' => $branches
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
        'inventory_sku' => 'required|unique:inventories',
       'branch_id' => 'required|int',
        'product_id' => 'required|int',
        'receiver_id' => 'required|int',
        'supplier_id' => 'required|int',
    ]);
        $inventory = new Inventory($request->all());
        $inventory->save();
        return response()->json([
            'saved' => true,
            'message' => 'Inventory Created!',
            'form' => Inventory::form(),
            'log' => 'InventoryCreated'

        ]);

    }
}
