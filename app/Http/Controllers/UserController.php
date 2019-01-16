<?php

namespace App\Http\Controllers;

use App\User;

class UserController extends Controller
{
  public function __construct()
  {
    $this->middleware('auth:api')->except('');
  }

  public function index()
  {
    $model = User::select('id', 'full_name', 'staff_id', 'phone_number', 'portal_access', 'email', 'date_of_appointment')->searchPaginateAndOrder();
    $columns = User::$columns;
    return response()->json([
      'model' => $model,
      'columns' => $columns
    ]);
  }

  public function show($id)
  {
      return response()->json([
        'user' => User::with(['branch' => function ($query) { $query->select('id', 'name'); }])->whereId($id)->first()
      ]);
  }

}
