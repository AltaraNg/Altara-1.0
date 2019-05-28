<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    //NB: this model is not to be used in production
    //please note this model is temporary
    //it is to enable me use the old purchase table "purchase" and map it to eloquent ORM
    //it is not to be used in production code
    protected $table = 'purchase';

    public function oldRepayment()
    {
        return $this->hasOne(Repayment::class,'repayment_id','order_id');
    }
}
