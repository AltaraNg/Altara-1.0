<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DownPaymentRate extends Model
{
    protected $guarded = [];
    //
    public  static $downPayments = [
      "zero"=> 0,
      "twenty"=>20,
      "forty"=> 40,
      "sixty"=>60,
      "eighty"=>80
    ];

    public function newOrder(){
        return $this->belongsTo(NewOrder::class);
    }
}
