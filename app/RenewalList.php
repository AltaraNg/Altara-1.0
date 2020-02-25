<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RenewalList extends Model
{
    protected $guarded = [];

    /**
     * The model's default rules.
     *
     * @var array
     */
    public static $rules=[
        'order_id' => 'required|exists:orders,id',
        'feedback' => 'required',
        'status' => 'required|in:successful,callback,unreachable',
        'callback_date' => 'sometimes',
        'callback_time' => 'sometimes'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function callback()
    {
        return $this->hasOne(Callbacks::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function getRenewalData()
    {
        $this['callback'] = $this->callback;
        return $this;
    }
}
