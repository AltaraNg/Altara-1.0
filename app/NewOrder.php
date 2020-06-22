<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NewOrder extends Model
{
    protected $with = ['amortization'];

    protected $guarded = [];
    /**
     * Validation rules
     *
     * @return array
     * @var array
     */

    public static function rules()
    {
        $id = self::getRePayId();
        return [
            'customer_id' => 'required|exists:customers,id',
            'product_id' => 'required|exists:new_products,product_id',
            'repayment_duration_id' => 'required|exists:repayment_durations,id',
            'repayment_cycle_id' => 'required|exists:repayment_cycles,id',
            'business_type_id' => 'required|exists:business_types,id',
            'status_id' => 'required|exists:order_statuses,id',
            'branch_id' => 'required|exists:branches,id',
            'down_payment' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'custom_date' => 'integer|min:1|max:31|required_if:repayment_cycle_id,'. $id
        ];
    }

    /**
     * The model's default rules.
     *
     * @return array
     * @var array
     */

    public static function updateRules($id)
    {
        return [
            'name' => 'sometimes|required|unique:new_orders,name,' . $id,
        ];
    }

    private static function getRePayId()
    {
        return RepaymentCycle::where('name', RepaymentCycle::CUSTOM)->first()->id;
    }

    public function businessType(){
        return $this->belongsTo(BusinessType::class);
    }

    public function paymentMethod(){
        return $this->hasOne(PaymentMethod::class);
    }

    public function repaymentDuration (){
        return $this->belongsTo(RepaymentDuration::class);
    }

    public function repaymentCycle(){
        return $this->belongsTo(RepaymentCycle::class);
    }

    public function amortization(){
        return $this->hasMany(Amortization::class);
    }

    public function orderStatus(){
        return $this->belongsTo(OrderStatus::class, 'status_id');
    }
    public function customer(){
        return $this->belongsTo(Customer::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function branch(){
        return $this->belongsTo(Branch::class);
    }

    public function product(){
        return $this->hasMany(StoreProduct::class);
    }

    public function customDate(){
        return $this->hasOne(CustomRepaymentDate::class);
    }

    public function defaulter(){
        $onTime = $this->amortization()->where('actual_amount','>',1)->count();
        $total = $this->amortization()->count();
        return ($onTime /$total) * 100;
    }

    public function toArray()
    {
        return [
            "order_number" => $this->order_number,
            "product_id" => $this->product_id,
            "repayment_duration" => $this->repaymentDuration->name,
            "repayment_cycle" => $this->repaymentCycle->name,
            "business_type" => $this->businessType->name,
            "status" => $this->orderStatus->name,
            "branch" => $this->branch->name,
            "product_price" => $this->product_price,
            "down_payment" => $this->down_payment,
            "repayment" => $this->repayment,
            "custom_date" => $this->customDate->custom_date,
            "amortization" => $this->amortization
        ];
    }
}

