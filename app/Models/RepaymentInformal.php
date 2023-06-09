<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RepaymentInformal extends Model
{
    protected $table = 'repayment_informal';

    protected $primaryKey = 'repayment_id';

    public $incrementing = false;

    protected $hidden = ['created_at', 'updated_at', 'date_of_last_payment', 'date_of_next_payment'];

    protected $guarded = [];
}
