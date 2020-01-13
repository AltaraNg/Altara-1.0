<?php

namespace App\Http\Controllers;

use App\Inventory;
use App\Category;
use App\Brand;
use App\Product;
use App\Supplier;
use App\Branch;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class InventoryController extends Controller
{
    //
    public function index()
    {
        $model = Inventory::select('id', 'inventory_sku', 'serial_number','market_price', 'branch_id', 'receiver_id')->searchPaginateAndOrder();
        $columns = Inventory::$columns;


        return response()->json([
            'model' => $model,
            'columns' => $columns,

        ]);
    }

    public function getInventories(){
        $inventories = Inventory::all();
        return response()->json([
            'inventories' => $inventories
        ]);
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        $brands = DB::table('brands')->where('is_available', '=', true)->get();
        $branches = Branch::all();
        $categories = DB::table('categories')->where('is_available', '=', true)->get();
        $products = Product::all();
        $suppliers = DB::table('suppliers')->where('status', '=', true)->get();
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
     * @param Request $request
     * @return Response
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
            'staff_id' => auth('api')->user()->staff_id,
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
     * @param Request $request
     * @param $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
//            'inventory_sku' => 'required|unique:inventory',
            'branch_id' => 'required|int',
            'product_id' => 'required|int',
            'receiver_id' => 'required|int',
            'supplier_id' => 'required|int',
            'serial_number' => 'required',
        ]);
        Inventory::whereId($id)->update($request->all());
        return response()->json([
            'updated' => true,
            'message' => 'Inventory Updated!',
            'staff_id' => auth('api')->user()->staff_id,
            'log' => 'InventoryUpdated'
        ]);
    }
}
