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
        $request->validate([
            'name' => 'required|unique:products',
            'brand_id' => 'required|int',
            'category_id' => 'required|int',
            'retail_price' => 'required|int',
        ]);
        $user = auth('api')->user();
        $request->user_id = $user->id;
        $product = new Product($request->all());
        // if ($request->hasFile($request['img_url']) && $request->file($request['img_url'])->isValid()) {

        //     /** 3.a if check 3 is passed*/
        //     /** get the image and assign to a variable */
        //     $image = $request->file($request['img_url']);

        //     /** Generate the file name(eg for passport name will be
        //      * passport/[randomStringGeneratedFromTheFunctionCall->getFileName]) */
        //     $filename = $request['img_url'] . '/' . $this->getFileName($request[$request['img_url']]);

        //     /** the storage link*/
        //     $s3 = Storage::disk('s3');

        //     /** store the document in s3*/
        //     $s3->put($filename, file_get_contents($image), 'public');
        //     $product[$request['img_url'] . '_url'] = $filename;

        // }

        /** update the document_url(eg passport_url, id_url) to the filename generated*/

        $product->save();
        return response()->json([
            'saved' => true,
            'message' => 'Product Created!',
            'form' => Product::form(),
            'staff_id' => $user->staff_id,
            'log' => 'ProductCreated'
        ]);

    }
}
