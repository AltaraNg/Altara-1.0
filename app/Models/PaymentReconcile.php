<?php

namespace App\Models;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PaymentReconcile extends Model
{
    use Filterable;
    protected $guarded = [];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'date',
    ];

    /**
     * The model's default rules.
     *
     * @var array
     */
    public static $updateRules = [
        'cash_at_hand' => 'sometimes|required|regex:/^\d+(\.\d{1,2})?$/',
        'deposited' => 'sometimes|required|regex:/^\d+(\.\d{1,2})?$/'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    /**
     * @return BelongsTo
     */
    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class);
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
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function financeReconcile()
    {
        return $this->hasOne(FinanceReconcile::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphOne
     */
    public function comment()
    {
        return $this->morphOne(Comment::class, 'commentable');
    }

    /**
     * Set the Total.
     *
     * @return void
     */
    public function setTotalAttribute()
    {
        $this->attributes['total'] = $this->payments->sum('amount');
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'reconcile_number' => $this->reconcile_number,
            'payment_method' => $this->paymentMethod->name,
            'user' => $this->user->full_name ?? null,
            'branch' => $this->branch->name,
            'total' => $this->total,
            'cash_at_hand' => $this->cash_at_hand,
            'deposited' => $this->deposited,
            'date' => $this->created_at->toDateTimeString(),
            'comment' => $this->comment,
            'finance' => $this->financeReconcile
        ];
    }
}
