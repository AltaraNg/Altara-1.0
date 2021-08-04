<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FinanceReconcile extends Model
{
    protected $guarded = [];


    /**
     * The model's default rules.
     *
     * @var array
     */
    public static $updateRules = [
        'bank_statement' => 'sometimes|required|regex:/^\d+(\.\d{1,2})?$/'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function paymentReconcile()
    {
        return $this->belongsTo(PaymentReconcile::class);
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphOne
     */
    public function comment()
    {
        return $this->morphOne(Comment::class, 'commentable');
    }

    /**
     * @return array
     */
    public function toArray()
    {
        return [
            'bank_statement' => $this->bank_statement,
            'comment' => $this->comment
        ];
    }
}
