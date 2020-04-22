<?php

namespace App;

use App\Http\Filters\Filterable;
use App\Http\Filters\QueryFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class TransactionList extends Model
{
    use Filterable;
    protected $guarded = [];
    protected $primaryKey = 'payment_id';

    public $incrementing = false;

    /**
     * The model's default rules.
     *
     * @var array
     */
    public static $rules = [
        'amount' => 'required|regex:/^\d+(\.\d{1,2})?$/',
        'customer_id' => 'required|exists:customers,id',
        'transaction_type_id' => 'required|exists:transaction_types,id',
        'transaction_method_id' => 'required|exists:transaction_methods,id'
    ];

    /**
     * The model's default rules.
     *
     * @var array
     */
    public static $updateRules = [
        'amount' => 'sometimes|required|regex:/^\d+(\.\d{1,2})?$/',
        'customer_id' => 'sometimes|required|exists:customers,id',
        'transaction_type_id' => 'sometimes|required|exists:transaction_types,id',
        'transaction_method_id' => 'sometimes|required|exists:transaction_methods,id'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function transaction()
    {
        return $this->belongsTo(Transaction::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function transactionType()
    {
        return $this->belongsTo(TransactionType::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function transactionMethod()
    {
        return $this->belongsTo(TransactionMethod::class);
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
            'id' => $this->payment_id,
            'type' => $this->transactionType->type,
            'method' => $this->transactionMethod->method,
            'amount' => $this->amount,
            'date' => $this->created_at->toDateTimeString(),
            'comment' => $this->comment
        ];
    }
}
