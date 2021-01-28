<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewOrderSalesCategoryController extends Controller
{
    //
    public function newOrder()
    {
        return $this->hasMany(NewOrder::class);
    }
}
