<?php

namespace App\Http\Controllers;

use App\Models\GeneralReason;

class GeneralReasonController extends Controller
{
    //
    public function index($type)
    {
      $data = GeneralReason::where('reason_type', $type)->get();
      return $this->sendSuccess(['data' => $data], "Reasons of type ${type} fetched");
    }
}
