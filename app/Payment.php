<?php

namespace App;

use App\Http\Filters\Filterable;
use App\Http\Filters\QueryFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use Filterable;
    protected $guarded = [];

    /**
     * The model's default rules.
     *
     * @var array
     */
    public static $rules = [
        'amount' => 'required|regex:/^\d+(\.\d{1,2})?$/',
        'customer_id' => 'required|exists:customers,id',
        'payment_type_id' => 'required|exists:payment_types,id',
        'payment_method_id' => 'required|exists:payment_methods,id'
    ];

    /**
     * The model's default rules.
     *
     * @var array
     */
    public static $updateRules = [
        'amount' => 'sometimes|required|regex:/^\d+(\.\d{1,2})?$/',
        'customer_id' => 'sometimes|required|exists:customers,id',
        'payment_type_id' => 'sometimes|required|exists:payment_types,id',
        'payment_method_id' => 'sometimes|required|exists:payment_methods,id'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function paymentReconcile()
    {
        return $this->belongsTo(PaymentReconcile::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function paymentType()
    {
        return $this->belongsTo(PaymentType::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphOne
     */
    public function comment()
    {
        return $this->morphOne(Comment::class, 'commentable');
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'payment_number' => $this->payment_number,
            'type' => $this->paymentType->type,
            'customer' => $this->customer,
            'method' => $this->paymentMethod->name,
            'amount' => $this->amount,
            'date' => $this->created_at->toDateTimeString(),
            'comment' => $this->comment
        ];
    }
}
