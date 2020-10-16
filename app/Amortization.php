<?php

namespace App;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class Amortization extends Model
{
    use Filterable;
    protected $guarded = [];

    /**
     * The model's default rules.
     *
     * @var array
     */
    public static $updateRules = [
        'actual_payment_date' => 'sometimes|required|date',
        'actual_amount' => 'sometimes|required|regex:/^\d+(\.\d{1,2})?$/'
    ];

    public function new_orders()
    {
        return $this->belongsTo(NewOrder::class, 'new_order_id');
    }
}
