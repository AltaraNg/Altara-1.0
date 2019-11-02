<?php

namespace App;

use App\Helper\Scopes;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use Scopes;

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
        return $this->hasOne(Repayment::class, 'repayment_id', 'id');
    }

    public function repaymentFormal()
    {
        return $this->hasOne(RepaymentFormal::class, 'repayment_id', 'id');
    }

    public function repaymentInformal()
    {
        return $this->hasOne(RepaymentInformal::class, 'repayment_id', 'id');
    }

    public function reminders()
    {
        return $this->hasMany(Reminder::class, 'order_id', 'id');
    }

    public function storeProduct()
    {
        return $this->hasOne(StoreProduct::class, 'product_id', 'product_sku');
    }

    public function discount()
    {
        return $this->belongsTo(Discount::class);
    }

    public function salesCategory()
    {
        return $this->belongsTo(SalesCategory::class);
    }

    public function salesType()
    {
        return $this->belongsTo(SalesType::class);
    }

    public function status()
    {
        return $this->belongsTo(Status::class);
    }
}
