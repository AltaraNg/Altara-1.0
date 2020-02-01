<?php

namespace App\Http\Controllers;

use App\Brand;
use EloquentBuilder;
use App\Category;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $model = Product::select('id', 'name', 'retail_price', 'category_id', 'brand_id', 'is_active')
            ->where('category_id','LIKE','%1%')
//        join('categories', 'products.category_id', '=', 'categories.id')
//

//            ->join('brands', 'products.brand_id', '=', 'brands.id')
//            ->select('products.id', 'products.name', 'products.retail_price', 'categories.name', 'brands.name', 'products.availabiity')
            ->searchPaginateAndOrder();


//            ->join('categories', 'products.category_id', '=', 'categories.id')
//            ->join('brands', 'products.brand_id', '=', 'brands.id')


        $columns = Product::$columns;
        return response()->json([
            'model' => $model,
            'columns' => $columns
        ]);
    }

    public function getProducts(){
        $products = Product::all();
        return response()->json([
            'products'=> $products
        ]);
    }
    public function searchProducts(Request $request){
        $query = DB::table('products');
        if ($request->brand != null){
            $query->where('brand_id', '=', $request->brand);
        }
        if ($request->category != null){
            $query->where('category_id', '=', $request->category);
        }
        if ($request->status != null){
            $query->where('availability', '=', $request->status);
        }
        if ($request->branch != null){
            $query->where('branch_id', '=', $request->branch);
        }
        $products = $query->orderBy('brand_id')->get();

        return response()->json([
            'products' => $products
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

        $categories = DB::table('categories')->where('is_available', '=', 1)->get();

        return response()->json([
            'brands' => $brands,
            'form' => Product::form(),
            'categories' => $categories
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
            'name' => 'required|unique:products',
            'brand_id' => 'required|int',
            'category_id' => 'required|int',
            'retail_price' => 'required|int',
        ]);
        $user = auth('api')->user();
        $product = new Product($request->all());
        $request->user_id = $user->id;

         if ($request->hasFile($request['img_url']) && $request->file($request['img_url'])->isValid()) {
             dd('I got here');

             /** 3.a if check 3 is passed*/
             /** get the image and assign to a variable */
             $image = $request->file($request['img_url']);

             /** Generate the file name(eg for passport name will be
              * passport/[randomStringGeneratedFromTheFunctionCall->getFileName]) */
             $filename = $request['img_url'] . '/' . $this->getFileName($request[$request['img_url']]);

             /** the storage link*/
             $s3 = Storage::disk('s3');

             /** store the document in s3*/
             $s3->put($filename, file_get_contents($image), 'public');
             $product[$request['img_url'] . '_url'] = $filename;

         }

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

    protected function getFileName($file)
   {
      /** generate a random string and append the file extension to the random string */
      return str_random(32) . '.' . $file->extension();
   }


    /**
     * Display the specified resource.
     *
     * @param Product $product
     * @return Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $id

     * @return Response
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
     * @param Request $request
     * @param $id
     * @return Response
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
     * @param Product $product
     * @return Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
