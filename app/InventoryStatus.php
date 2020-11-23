<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InventoryStatus extends Model
{
    use HasFactory;

    const AVAILABLE = 'Available';
    const SOLD = 'Sold';
    const REPOSSESSED = 'Repossessed';
    const DAMAGED = 'Damaged';
    //
    public function inventory(){
        return $this->belongsTo(Inventory::class);
    }
}
