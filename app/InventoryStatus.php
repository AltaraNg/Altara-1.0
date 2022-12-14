<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InventoryStatus extends Model
{

    const AVAILABLE = 'Available';
    const SOLD = 'Sold';
    const REPOSSESSED = 'Repossessed';
    const DAMAGED = 'Damaged';

    public function inventory(){
        return $this->belongsTo(Inventory::class);
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'status' => $this->status
        ];
    }
}
