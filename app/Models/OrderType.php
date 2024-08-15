<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderType extends Model
{
    protected $table = "order_types";
    const ALTARA_CREDIT = 'Altara Credit';
    const ALTARA_PAY = 'Altara Pay';

    protected $guarded = [];
}
