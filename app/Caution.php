<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Caution extends Model
{
    protected $guarded = [];

    protected $appends = ['reason_min', 'penalty_min', 'date_text'];

    public function getReasonMinAttribute()
    {
        return str_limit($this->attributes['reason'], '20');
    }

    public function getPenaltyMinAttribute()
    {
        return str_limit($this->attributes['penalty'], '20');
    }

    public function getDateTextAttribute()
    {
        return Carbon::now('+1')->addHour('1')->toFormattedDateString($this->attributes['date']);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function Issuer()
    {
        return $this->belongsTo(User::class);
    }

    public static function form()
    {
        return [
            'issuer_id' => auth('api')->user()->id,
            'user_id' => '',
            'reason' => '',
            'penalty' => '',
            'date' => date('Y-m-d'),
        ];
    }
}
