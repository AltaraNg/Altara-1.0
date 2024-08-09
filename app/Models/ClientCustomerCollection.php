<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientCustomerCollection extends Model
{
    use HasFactory;
    protected $guarded = [];

    protected $casts = [
        'processed_rows' => 'array',
        'failed_rows' => 'array',
        'error' => 'array',
        'exception_stack_trace' => 'array',
    ];

    public function client(){
        return $this->belongsTo(Tenant::class);
    }
}
