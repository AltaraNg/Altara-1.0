<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RepaymentFormal extends Model
{
    protected $table = 'repayment_formal';

    protected $primaryKey = 'repayment_id';

    public $incrementing = false;

    protected $hidden = ['created_at', 'updated_at'];
}
