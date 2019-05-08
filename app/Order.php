<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //protected $table = "purchase";
    protected $table = "orders";

    protected $primaryKey = 'id';

    public $incrementing = false;

    protected $fillable = [
        'id',
        'order_date',
        'sales_category_id',
        'customer_id',
        'product_sku',
        'product_price',
        'down_payment',
        'product_qty',
        'sales_type_id',
        'discount_id',
        'repayment_amount',
        'sales_agent_id',
        'payment_method_id',
        'deposit_to',
        'return'
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function floorAgent()
    {
        return $this->belongsTo(User::class, 'sales_agent_id', 'staff_id');
    }

    public function repayment()
    {
        return $this->hasOne(Repayment::class, 'repayment_id', 'order_id');
    }

    public function reminders()
    {
        return $this->hasMany(Reminder::class, 'order_id', 'order_id');
    }
}
