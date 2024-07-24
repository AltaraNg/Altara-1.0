<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BankAccount extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $hidden = ['bvn'];

    public function bank()
    {
        return $this->belongsTo(Bank::class);
    }
}
