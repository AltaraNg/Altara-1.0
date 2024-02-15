<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CustomerMobileAppAudit extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $casts = [
        'meta' => 'array',
    ];


    public function mobileAppActivity(): BelongsTo
    {
        return $this->belongsTo(MobileAppActivity::class);
    }
}
