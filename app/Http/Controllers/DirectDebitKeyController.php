<?php


namespace App\Http\Controllers;

use App\DirectDebitKey;
use App\Helper\ResponseHelper;

class DirectDebitKeyController
{
    public function index()
    {
        return ResponseHelper::createSuccessResponse(DirectDebitKey::all()->toArray());
    }
}
