<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AltaraPayReport extends Model
{
    //
    public $timestamps = true;

    protected $fillable = ['check','user_id','branch_id', 'date', 'interest'];

    public static function form(): iterable
    {
        $user = auth('api')->user();
        return [
            'check' => '',
            'user_id' => $user->id,
            'branch_id' => $user->branch_id,
            'interest' => '',
            'date' => date('Y-m-d'),
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
