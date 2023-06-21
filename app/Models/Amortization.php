<?php

namespace App\Models;

use App\Http\Filters\Filterable;
use App\Rules\Money;
use Illuminate\Database\Eloquent\Model;

class Amortization extends Model
{
    use Filterable;
    protected $guarded = [];

    /**
     * The model's default rules.
     *
     * @return array
     * @var array
     */

    public static function updateRules()
    {
        return [
            'user_id' => 'sometimes|exists:users,id',
            'actual_payment_date' => 'sometimes|nullable|date',
            'actual_amount' => ['sometimes', 'required', new Money],
            'expected_payment_date' => 'sometimes|required|date',
            'expected_amount' => ['sometimes', 'required', new Money],
        ];
    }

    public function new_orders()
    {
        return $this->belongsTo(NewOrder::class, 'new_order_id');
    }

    public function users(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
