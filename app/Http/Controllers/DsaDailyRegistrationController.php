<?php

namespace App\Http\Controllers;

use App\Models\DsaDailyRegistration;
use Illuminate\Http\Request;

class DsaDailyRegistrationController extends Controller
{
   public function store(Request $request)
   {
      $user = auth('api')->user();
      $this->validate($request, ['user_id' => 'required|integer|exists:users,id']);
      $dsaReport = new DsaDailyRegistration;
      $dsaReport->fill($request->all());
      $dsaReport->captain_id = $user->staff_id;
      $dsaReport->branch_id = $user->branch->id;
      $dsaReport->save();
      return response()->json([
         'submitted' => true,
         'message' => 'Report submitted successfully!',
      ]);
   }
}
