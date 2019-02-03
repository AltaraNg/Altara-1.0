<?php


use App\Brand;
use App\Category;
use App\Product;
use App\Supplier;

Route::get('/clins', function () {


   $data = Category::find(2)->brands()->get();



   /*$data = Product::whereId(1)->with([
      'adder' => function ($query) {
         $query->select('id', 'full_name');
      },
      'seller' => function ($query) {
         $query->select('id', 'full_name');
      },
      'receiver' => function ($query) {
         $query->select('id', 'full_name');
      },
      'brand',
      'branch' => function ($query) {
         $query->select('id', 'name');
      },
      'category',
      'supplier' => function ($query) {
         $query->select('id', 'full_name');
      },
   ])->get();*/

   return response()->json([
      'product' => $data,

   ]);


   /*user < = > products relationships*/
   /*$data = User::whereId(7)->with([
      'productsAdded' => function ($query) {
         $query->select('id', 'user_id');
      },
      'productsSold' => function ($query) {
         $query->select('id', 'sold_by');
      },
      'productsReceived' => function ($query) {
         $query->select('id', 'received_by');
      }
   ])->get();
   return response()->json($data);
   */

   /*brand < = > products relationships*/
   /*$data = Brand::whereId(2)->with(['products' => function($query) {
      $query->select('id','sku','brand_id');
   }])->get();

   return response()->json($data);*/

   /*branch < = > products relationship*/
   /*$rel = Branch::whereId(6)->with([
      'products' => function ($query) {
         $query->select('id', 'sku', 'branch_id');
      }
   ])->get();*/

   /*category < = > products relationship*/
   /*$rel = Category::whereId(4)->with([
      'products' => function ($query) {
         $query->select('id', 'sku', 'category_id');
      }
   ])->get();*/

   /*supplier < = > products relationship*/
   /*$rel = Supplier::whereId(16)->with([
      'products' => function ($query) {
         $query->select('id', 'sku', 'supplier_id');
      }
   ])->get();*/
});

Route::get('/{vue?}', function () {
   return view('welcome');
})->where('vue', '[\/\w\.-]*');


