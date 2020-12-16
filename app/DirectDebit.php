<?php

namespace App;

use App\Rules\Money;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DirectDebit extends Model
{
    protected $guarded = [];
    protected $table = "dd_result";
    public static function rules()
    {
        return [
            'order_id' => 'required|exists:new_orders,order_number',
            'date' => 'required|date',
            'next_try_date' => 'required|date',
            'amount' => ['required', new Money],
            'level' => 'required|string',
            'status' => 'required|string',
            'g_res' => 'sometimes|string',
            'ref' => 'sometimes|string'
        ];
    }
}
