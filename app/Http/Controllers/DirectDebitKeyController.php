<?php


namespace App\Http\Controllers;

use App\DirectDebitKey;
use App\Helpers\ResponseHelper;

class DirectDebitKeyController
{
    public function index()
    {
        return ResponseHelper::createSuccessResponse(DirectDebitKey::all()->toArray());
    }
}
