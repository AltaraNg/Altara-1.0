<?php


namespace App\Http\Controllers;

use App\Helper\ResponseHelper;
use App\Models\DirectDebitKey;

class DirectDebitKeyController
{
    public function index()
    {
        return ResponseHelper::createSuccessResponse(DirectDebitKey::all()->toArray());
    }
}
