<?php

namespace App;

use App\Http\Filters\Filterable;
use App\Rules\Money;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Payment extends Model
{
    use Filterable;
    protected $guarded = [];

    /**
     * The model's default rules.
     *
     * @return array
     * @var array
     */

    public static function rules()
    {
        return [
            'amount' => ['required', new Money],
            'customer_id' => 'required|exists:customers,id',
            'payment_type_id' => 'required|exists:payment_types,id',
            'payment_method_id' => 'required|exists:payment_methods,id',
            'model_id' => 'required|integer',
            'model' => 'required|string'
        ];
    }

    /**
     * The model's default rules.
     *
     * @return array
     * @var array
     */
    public static function updateRules()
    {
        return [
            'amount' => ['sometimes','required', new Money],
            'customer_id' => 'sometimes|required|exists:customers,id',
            'payment_type_id' => 'sometimes|required|exists:payment_types,id',
            'payment_method_id' => 'sometimes|required|exists:payment_methods,id'
        ];
    }

    /**
     * @return BelongsTo
     */
    public function paymentReconcile()
    {
        return $this->belongsTo(PaymentReconcile::class);
    }

    /**
     * @return BelongsTo
     */
    public function paymentType()
    {
        return $this->belongsTo(PaymentType::class);
    }

    /**
     * @return BelongsTo
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    /**
     * @return BelongsTo
     */
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    /**
     * @return BelongsTo
     */
    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class);
    }

    /**
     * @return MorphOne
     */
    public function comment()
    {
        return $this->morphOne(Comment::class, 'commentable');
    }

    /**
     * @return MorphTo
     */
    public function orderable()
    {
        return $this->morphTo();
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'payment_number' => $this->payment_number,
            'type' => $this->paymentType->type,
            'branch' => $this->branch->name,
            'customer' => $this->customer,
            'method' => $this->paymentMethod->name,
            'amount' => $this->amount,
            'date' => $this->created_at->toDateTimeString(),
            'comment' => $this->comment
        ];
    }
}
