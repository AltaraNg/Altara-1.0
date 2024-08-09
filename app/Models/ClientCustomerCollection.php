<?php

namespace App\Models;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class ClientCustomerCollection extends Model
{
    use HasFactory, Filterable;
    protected $guarded = [];

    protected $casts = [
        'processed_rows' => 'array',
        'failed_rows' => 'array',
        'error' => 'array',
        'exception_stack_trace' => 'array',
    ];

    public function client(){
        return $this->belongsTo(Tenant::class, 'tenant_id');
    }
    public function uploadedBy()
    {
        return $this->belongsTo(User::class, 'uploaded_by_id');
    }

    protected function uploadedFileUrl(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                if (!$value) {
                    return $value;
                }
                return Storage::disk('s3')->url($value);
            },
        );
    }
}
