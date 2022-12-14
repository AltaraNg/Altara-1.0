<?php

namespace App;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class ProductTransfer extends Model
{
    use Filterable;
    protected $guarded = [];

    /**
     * Validation rules
     *
     * @return array
     * @var array
     */

    public static function rules()
    {
        return [
            'to_id' => 'required|exists:branches,id',
            'inventory_id' => 'required|exists:inventories,id'
        ];
    }

    /**
     * Validation rules
     *
     * @return array
     * @var array
     */

    public static function updateRules()
    {
        return [
            'to_id' => 'sometimes|required|exists:branches,id',
            'inventory_id' => 'sometimes|required|exists:inventories,id',
            'current' => 'sometimes|required|boolean'
        ];
    }


    public function to()
    {
        return $this->belongsTo(Branch::class);
    }

    public function from()
    {
        return $this->belongsTo(Branch::class);
    }

    public function inventory()
    {
        return $this->belongsTo(Inventory::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'inventory_id' => $this->inventory->id,
            'inventory_name' => $this->inventory->product_name,
            'to' => $this->to->name,
            'from' => $this->from->name,
            'user' => $this->user->full_name,
            'created_at' => $this->created_at->toDateTimeString()
        ];
    }
}
