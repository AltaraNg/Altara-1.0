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
        $model = Inventory::select('id', 'inventory_sku', 'serial_number','market_price' )->searchPaginateAndOrder();
        $columns = Inventory::$columns;
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
        'serial_number' => 'required',
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


    public function edit($id)
    {
        $brands = Brand::all();
        $branches = Branch::all();
        $categories = Category::all();
        $products = Product::all();
        $suppliers = Supplier::all();
        $form = Inventory::findOrFail($id);
        return response()->json([
            'form' => $form,
            'brands' => $brands,
            'categories' => $categories,
            'branches' => $branches,
            'products' => $products,
            'suppliers'=> $suppliers
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
            'inventory_sku' => 'required|unique:inventories',
            'branch_id' => 'required|int',
            'product_id' => 'required|int',
            'receiver_id' => 'required|int',
            'supplier_id' => 'required|int',
            'serial_number' => 'required',
        ]);
        Inventory::whereId($id)->update($request->all());
        return response()->json([
            'updated' => true,
            'message' => 'Product Updated!',
            'staff_id' => auth('api')->user()->staff_id,
            'log' => 'InventoryUpdated'
        ]);
    }
}
