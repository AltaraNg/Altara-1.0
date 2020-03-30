<?php

namespace App\Http\Controllers;

use App\Brand;
use App\Services\Logistics\BrandService;
use App\Services\Logistics\CategoryService;
use EloquentBuilder;
use App\Category;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;


/**
 * @property BrandService brandService
 * @property CategoryService categoryService
 */
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param BrandService $brandService
     * @param CategoryService $categoryService
     */

    public function __construct(BrandService $brandService, CategoryService $categoryService)
    {
        $this->brandService = $brandService;
        $this->categoryService = $categoryService;
    }

    public function index()
    {
        $model = Product::select('id', 'name', 'retail_price', 'is_active')


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
            $query->where('is_active', '=', $request->status);
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
        return response()->json([
            'brands' => $this->brandService->getAvailableBrands(),
            'form' => Product::form(),
            'categories' => $this->categoryService->getAvailableCategories()
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
//        $request->validate([
//            'name' => 'required',
//            'brand_id' => 'required|int',
//            'category_id' => 'required|int',
//            'retail_price' => 'required|int',
//        ]);
//
        $user = auth('api')->user();
        echo($request);
//

        $product = new Product($request->all());
        $product->user_id = $user->id;

//        $this->validate($request, [
//            'img_url' => 'image|max:512|dimensions:max_width=1200,max_height=1200|mimes:jpeg,jpg,png'
//        ]);

//         if ($request->hasFile('img_url') && $request->file('img_url')->isValid()) {
//
//
//             /** 3.a if check 3 is passed*/
//             /** get the image and assign to a variable */
//             $image = $request->file('img_url');
//
//             /** Generate the file name(eg for passport name will be
//              * passport/[randomStringGeneratedFromTheFunctionCall->getFileName]) */
//             $filename = 'products' . '/' . $this->getFileName($request->img_url);
//
//             /** the storage link*/
//             $s3 = Storage::disk('s3');
//
//             /** store the document in s3*/
//             $s3->put($filename, file_get_contents($image), 'public');
//             $product->img_url = $filename;
//
//         }

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
