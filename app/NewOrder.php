<?php

namespace App;

use App\Http\Filters\Filterable;
use App\Rules\Money;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class NewOrder extends Model
{
    use Filterable, Notifiable;

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
        $id = self::getCustomRepaymentCycleId();
        return [
            'customer_id' => 'required|exists:customers,id',
            'product_id' => 'required|exists:products,id',
            'repayment' => ['required', new Money],
            'repayment_duration_id' => 'required|exists:repayment_durations,id',
            'repayment_cycle_id' => 'required|exists:repayment_cycles,id',
            'business_type_id' => 'required|exists:business_types,id',
            'payment_method_id' => 'required|exists:payment_methods,id',
            'down_payment' => ['required', new Money],
            'product_price' => ['required', new Money],
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

    private static function getCustomRepaymentCycleId()
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
        return $this->belongsTo(Customer::class, 'customer_id');
    }
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function branch(){
        return $this->belongsTo(Branch::class);
    }

    public function product(){
        return $this->belongsTo(Product::class);
    }

    public function customDate(){
        return $this->hasOne(CustomRepaymentDate::class);
    }

    public function defaulter(){
        $onTime = $this->amortization()->where('actual_amount','>',1)->count();
        $total = $this->amortization()->count();
        return ($onTime /$total) * 100;
    }

    /**
     * Get all of the New Order's payments.
     */
    public function payments()
    {
        return $this->morphMany(Payment::class, 'orderable');
    }

    public function toArray()
    {
        return [
            "id" => $this->id,
            "order_number" => $this->order_number,
            "product_id" => $this->product_id,
            "product" => $this->product,
            "repayment_duration" => $this->repaymentDuration->name,
            "repayment_cycle" => $this->repaymentCycle->name,
            "customer_id" => $this->customer->id,
            "customer_name" => $this->customer->fullName,
            "customer_phone" => $this->customer->telephone,
            "business_type" => $this->businessType->name,
            "status" => $this->orderStatus->name,
            "branch" => $this->branch->name,
            "product_price" => $this->product_price,
            "down_payment" => $this->down_payment,
            "repayment" => $this->repayment,
            "custom_date" => $this->customDate->custom_date ?? null,
            "amortization" => $this->amortization
        ];
    }
}

