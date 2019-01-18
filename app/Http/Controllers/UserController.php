<?php

namespace App\Http\Controllers;

use App\User;

class UserController extends Controller
{
   public function index()
   {
      /** gets list of users(paginated), searchPaginateAndOrder is a custom
       * query scope used by all the models that use data viewer trait
       * in this application */
      $model = User::select('id', 'full_name', 'staff_id', 'phone_number', 'portal_access', 'email', 'date_of_appointment')
         ->searchPaginateAndOrder();
      /** the columns used to render the data viewer for users*/
      $columns = User::$columns;
      /** return the columns and the paginated list*/
      return response()->json([
         'model' => $model,
         'columns' => $columns
      ]);
   }

   public function show($id)
   {
      /** fetching currently logged in user with the branch(only id and name) and return it*/
      return response()->json([
         'user' => User::with(['branch' => function ($query) {
            $query->select('id', 'name');
         }])->whereId($id)->first()
      ]);
   }

   public function getBranchUsers() {
      $DSAs = User::whereIn('role_id', [17, 18])
         ->where('branch_id', auth('api')->user()->branch_id )
         ->select('id','staff_id','full_name')
         ->get();
      return response()->json([
         'DSAs' => $DSAs,
      ]);
   }
}
