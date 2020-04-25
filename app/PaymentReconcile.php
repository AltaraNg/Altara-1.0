<?php

namespace App;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class PaymentReconcile extends Model
{
    use Filterable;
    protected $guarded = [];
    protected $with = ['comment'];

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
     * @return \Illuminate\Database\Eloquent\Relations\MorphOne
     */
    public function comment()
    {
        return $this->morphOne(Comment::class, 'commentable');
    }

    /**
     * Set the Total.
     *
     * @param  string  $value
     * @return void
     */
    public function setTotalAttribute($value)
    {
        $this->attributes['total'] = $this->payments->sum('amount');
    }
}
