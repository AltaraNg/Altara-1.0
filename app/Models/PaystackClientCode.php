<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaystackClientCode extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $table = 'paystack_client_code';
}
