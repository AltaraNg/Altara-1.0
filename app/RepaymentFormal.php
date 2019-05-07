<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RepaymentFormal extends Model
{
    protected $table = 'repayment_formal';

    protected $primaryKey ='repayment_id';

    protected $incrementing = false;
}
