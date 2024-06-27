<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RenewalList extends Model
{
    protected $guarded = [];

    /**
     * The model's default rules.
     *
     * @return array
     * @var array
     */

    public static function rules()
    {
        $callback = self::getCallbackId();
        return [
            'order_id' => 'required|exists:orders,id',
            'feedback' => 'required',
            'status_id' => 'required|exists:renewal_statuses,id',
            'callback_date' => 'date|required_if:status_id,' . $callback,
            'callback_time' => 'date_format:H:i|required_if:status_id,' . $callback
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
        $callback = self::getCallbackId();
        return [
            'feedback' => 'required',
            'status_id' => 'required|exists:renewal_statuses,id',
            'callback_date' => 'date|required_if:status_id,' . $callback,
            'callback_time' => 'date_format:H:i|required_if:status_id,' . $callback
        ];
    }

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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function status()
    {
        return $this->hasMany(RenewalStatus::class);
    }

    public function getRenewalData()
    {
        $this['callback'] = $this->callback;
        return $this;
    }

    private static function getCallbackId()
    {
        return RenewalStatus::where('status', 'callback')->first()->id;
    }
}
