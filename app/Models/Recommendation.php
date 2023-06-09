<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recommendation extends Model
{
    //
    protected $guarded = [];


    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'type' => $this->type,
            'input_data' => $this->input_data,
            'customer_id' => $this->customer_id,
            'result' => $this->result,
            'staff' => User::find($this->staff_id)->first(),
            'staff_id' => $this->staff_id,
            'created_at' => $this->created_at->toDateTimeString()
        ];
    }
}
