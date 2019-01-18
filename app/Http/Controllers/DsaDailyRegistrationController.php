<?php

namespace App\Http\Controllers;

use App\DsaDailyRegistration;
use Illuminate\Http\Request;

class DsaDailyRegistrationController extends Controller
{
   public function store(Request $request)
   {
      $this->validate($request, ['user_id' => 'required|integer|exists:users,id']);
      $dsaReport = new DsaDailyRegistration;
      $dsaReport->fill($request->all());
      $dsaReport->captain_id = auth('api')->user()->staff_id;
      $dsaReport->save();
      return response()->json([
         'submitted' => true,
         'message' => 'Report submitted successfully!',
      ]);
   }
}
