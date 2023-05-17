<?php

namespace App;

use App\Http\Filters\Filterable;
use App\Http\Resources\JSONApiCollection;
use App\Http\Resources\JSONApiResource;
use App\Rules\Money;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\RequiredIf;

class   NewOrder extends Model
{
    use Filterable, Notifiable;

    protected $with = ['amortization'];

    protected $guarded = [];

    const REM = 'reminder';
    const CRDBUR = 'credit_bureau';
    const INTREPO = 'internal_repossession';
    const EXTREPO = 'external_repossession';

    const BANK54 = 'bank54';
    const ALTARA_BNPL = 'altara-bnpl';


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
            'inventory_id' => 'required|exists:inventories,id',
            'bank_id' => 'required|exists:banks,id',
            'repayment' => ['required', new Money],
            'owner_id' => 'required|exists:users,id',
            'serial_number' => 'sometimes|string|unique:new_orders,serial_number',
            'sales_category_id' => 'required|exists:sales_categories,id',
            'repayment_duration_id' => 'required|exists:repayment_durations,id',
            'repayment_cycle_id' => 'required|exists:repayment_cycles,id',
            'business_type_id' => 'required|exists:business_types,id',
            'payment_method_id' => 'required|exists:payment_methods,id',
            'down_payment' => ['required', new Money],
            'discount' => 'sometimes|array',
            'discount.*' => 'sometimes|numeric|exists:discounts,id',
            'product_price' => ['required', new Money],
            'custom_date' => 'integer|min:1|max:31|required_if:repayment_cycle_id,' . $id,
            'down_payment_rate_id' => 'sometimes|exists:down_payment_rates,id',
            'order_type_id' => 'sometimes|exists:order_types,id',
            'payment_gateway_id' => 'sometimes|exists:payment_gateways,id',
            'discount_id' => 'sometimes|exists:discounts,id',
            'bvn' => [new RequiredIf(request('financed_by') == self::BANK54), 'string'],
            'financed_by' => ['required', 'string', Rule::in(['altara', self::BANK54, self::ALTARA_BNPL])],
            'bnpl_vendor_product_id' => [new RequiredIf(request('financed_by') == self::ALTARA_BNPL), 'integer', Rule::exists('bnpl_vendor_products', 'id')->where('vendor_id', request('owner_id'))],
            "commitment_percentage" => ['sometimes', 'numeric', 'max:100'],
            "commitment_amount" => ['sometimes', 'numeric'],
            'account_number' => ['sometimes', 'string', 'min:10'],
            'account_name' => ['sometimes', 'string'],
            'bank_name' => ['sometimes', 'string'],
            'fixed_repayment' => ['sometimes', 'boolean']
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
            'product_id' => 'sometimes|required|exists:products,id',
            'status_id' => 'sometimes|required|exists:order_statuses,id',
            'repayment' => ['sometimes', 'required', new Money],
            'down_payment' => ['sometimes', 'required', new Money],
            'product_price' => ['sometimes', 'required', new Money],
            'order_date' => 'sometimes|required|date',
            'down_payment_rate_id' => 'sometimes|exists:down_payment_rates,id',
            'order_type_id' => 'sometimes|exists:order_types,id',
            'payment_gateway_id' => 'sometimes|exists:payment_gateways,id',
            'owner_id' => 'sometimes|required|exists:users,id',
            'discount_id' => 'sometimes|exists:discounts,id',
        ];
    }

    private static function getCustomRepaymentCycleId()
    {
        return RepaymentCycle::where('name', RepaymentCycle::CUSTOM)->first()->id;
    }

    public function businessType()
    {
        return $this->belongsTo(BusinessType::class);
    }
    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function paymentMethod()
    {
        return $this->hasOne(PaymentMethod::class);
    }

    public function repaymentDuration()
    {
        return $this->belongsTo(RepaymentDuration::class);
    }

    public function repaymentCycle()
    {
        return $this->belongsTo(RepaymentCycle::class);
    }

    public function amortization()
    {
        return $this->hasMany(Amortization::class, 'new_order_id', 'id');
    }

    public function late_fee_gen()
    {
        return $this->hasOne(Amortization::class)
            ->where('expected_payment_date', '<=', Carbon::now()->subMonth()->format('Y-m-d'))
            ->where('actual_payment_date', null)
            ->where('actual_amount', '<', 1)
            ->latest('expected_payment_date');
    }
    public function unpaidAmortizations()
    {
        return $this->hasMany(Amortization::class, 'new_order_id', 'id')->whereColumn('actual_amount', '<', 'expected_amount');
    }
    public function lastAmortization()
    {
        return $this->hasOne(Amortization::class)->latest('expected_payment_date');
    }
    public function latestAmortizationNotPayed()
    {
        return $this->hasOne(Amortization::class)->where('actual_payment_date', null)->where('actual_amount', '<', 1)->oldest('expected_payment_date');
    }
    public function latestAmortizationPayed()
    {
        return $this->hasOne(Amortization::class)->where('expected_payment_date', '<=', now()->endOfDay())->where('actual_payment_date', '<>', null)->where('actual_amount', '>', 1)->oldest('expected_payment_date');
    }
    public function orderStatus()
    {
        return $this->belongsTo(OrderStatus::class, 'status_id');
    }
    public function salesCategory()
    {
        return $this->belongsTo(SalesCategory::class, 'sales_category_id');
    }
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function bnplVendorProduct()
    {
        return $this->belongsTo(BnplVendorProduct::class, 'bnpl_vendor_product_id');
    }

    public function customDate()
    {
        return $this->hasOne(CustomRepaymentDate::class);
    }

    public function authCode()
    {
        return $this->hasOne(PaystackAuthCode::class, 'order_id', 'order_number');
    }

    public function defaulter()
    {
        $onTime = $this->amortization()->where('actual_amount', '>', 1)->count();
        $total = $this->amortization()->count();
        return ($onTime / $total) * 100;
    }

    public function discounts()
    {
        return $this->belongsToMany(
            Discount::class,
            'orders_discounts',
            'order_id',
            'discount_id'
        );
    }

    public function discount()
    {
        return $this->belongsTo(Discount::class);
    }

    /**
     * Get all of the New Order's payments.
     */
    public function payments()
    {
        return $this->morphMany(Payment::class, 'orderable');
    }
    public function downPaymentRate()
    {
        return $this->belongsTo(DownPaymentRate::class, 'down_payment_rate_id');
    }
    public function orderType()
    {
        return $this->belongsTo(OrderType::class, 'order_type_id');
    }
    public function paymentGateway()
    {
        return $this->belongsTo(PaymentGateway::class, 'payment_gateway_id');
    }
    public function lastRenewalPrompter()
    {
        return $this->hasOne(RenewalPrompter::class, 'order_id')->latest('renewal_prompters.created_at');
    }
    public function renewalPrompters()
    {
        return $this->hasMany(RenewalPrompter::class, 'order_id');
    }

    public function recollection()
    {
        return $this->hasOne(Recollection::class, 'new_order_id');
    }

    public function lateFee()
    {
        return $this->hasMany(LateFee::class, 'order_id');
    }
    /**
     * Get all of the New Order's payments.
     */
    public function getOrderPaymentMethodAttribute()
    {
        return $this->payments()->whereIn('payment_type_id', function ($query) {
            $query->select('id')->from('payment_types')->where('type', PaymentType::DOWNPAYMENT);
        })->first()->paymentMethod->name ?? null;
    }

    /**
     * Get the neworder's feedbacks.
     */
    // generalFeedbackAble
    public function generalFeedBacks()
    {
        return $this->morphMany(GeneralFeedback::class, 'generalFeedbackAble', 'general_feedback_able_type', 'general_feedback_able_id');
    }

    public function paystackAuthCode()
    {
        return $this->hasOne(PaystackAuthCode::class, 'order_id', 'order_number');
    }

    public function missMatchedPayments()
    {
        return $this->hasMany(MissMatchedPayments::class, 'order_id');
    }
    public function toArray()
    {
        return [
            "late_fee_gen" => $this->late_fee_gen,
            "id" => $this->id,
            "order_number" => $this->order_number,
            "bnpl_vendor_product_id" => $this->bnpl_vendor_product_id,
            "product_id" => $this->product_id,
            "product" => $this->product,
            'bnpl_vendor_product' => $this->bnplVendorProduct,
            "product_name" => $this->product->name ?? null,
            "serial_number" => $this->serial_number,
            "repayment_duration" => $this->repaymentDuration->name ?? null,
            "repayment_cycle" => $this->repaymentCycle->name ?? null,
            "customer_id" => $this->customer->id ?? '',
            "customer_name" => $this->customer->fullName ?? '',
            "customer_phone" => $this->customer->telephone ?? '',
            "customer_email" => $this->customer->email ?? '',
            "business_type" => $this->businessType->name ?? null,
            "status" => $this->orderStatus->name ?? null,
            "branch" => $this->branch->name ?? '',
            "product_price" => $this->product_price,
            "down_payment" => $this->down_payment,
            "repayment" => $this->repayment,
            "discount" => $this->discounts,
            "single_repayment" => $this->amortization[0]->expected_amount ?? '',
            "custom_date" => $this->customDate->custom_date ?? null,
            "amortization" => $this->amortization,
            "notifications" => $this->notifications,
            "order_payment_method" => $this->order_payment_method,
            "customer" => $this->customer,
            "order_date" => $this->order_date,
            "owner" => $this->owner->full_name ?? '',
            "sales_type" => $this->salesCategory ?? '',
            "branch_id" => $this->branch->id ?? '',
            "owner_id" => $this->owner->id ?? '',
            "down_payment_rate" => $this->downPaymentRate->name ?? null,
            "payment_gateway" => $this->paymentGateway->name ?? null,
            "order_type" => $this->orderType->name ?? null,
            'renewal_prompters' => ($this->renewalPrompters->count() > 0) ? new JSONApiCollection($this->renewalPrompters) : null,
            'last_renewal_prompter_activity' => ($this->lastRenewalPrompter) ? new JSONApiResource($this->lastRenewalPrompter) : null,
            'order_discount' => $this->discount,
            'general_feedbacks' => $this->generalFeedBacks ?? null,
            'financed_by' => $this->financed_by ?? null,
            'latestAmortizationPayed' => $this->latestAmortizationPayed,
            'latestAmortizationNotPayed' => $this->latestAmortizationNotPayed,
            'paystack_auth_code' => $this->paystackAuthCode ?? null,
            'commitment_amount' => $this->commitment_amount,
            'commitment_percentage' => $this->commitment_percentage,
            'missMatchedPayments' => $this->missMatchedPayments,
        ];
    }
}
