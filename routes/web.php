<?php


use App\Attendance;
use App\Branch;
use App\Brand;
use App\Category;
use App\Product;
use App\Supplier;
use App\User;

Route::get('/clins', function () {

    /*$data = Attendance::with(['user' => function($query) {
        return $query->select('id','full_name', 'staff_id', 'role_id','branch_id');
    }, 'user.role' => function($query) {
        return $query->select('id','name');
    }, 'user.branch' => function($query) {
        return $query->select('id','name');
    }, 'branch' => function($query){
        return $query->select('id', 'name');
    }])->get();*/

//    $data = User::whereId(1)->select('id','full_name','staff_id','role_id')->with(['attendances'])->get();
    $data = Branch::whereId(2)->select('id','name')->with(['attendances'])->get();


    return response()->json([
        'user' => $data,
    ]);


//    $data = Supplier::whereId(1 )->with(['categories'])->get();

    //$data = Category::whereId(1 )->with(['suppliers'])->get();

    //$data = Supplier::whereId(2)->with(['categories'])->get();

   //$data = Category::find(2)->brands()->get();

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


