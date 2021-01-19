<?php

namespace App;

use App\Http\Filters\Filterable;
use App\Rules\Money;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactCustomer extends Model
{
    use HasFactory, Filterable;
    protected $guarded = [];
    protected $with = ['users'];

    /**
     * Validation rules
     *
     * @return array
     * @var array
     */

    public static function rules()
    {
        return [
            'phone' => 'required|regex:/(0)[0-9]{10}/|unique:contact_customers,phone',
            'email' => 'sometimes|required|email|unique:contact_customers,email',
            'name' => 'sometimes|required|string',
            'monthly_income' => ['sometimes','required', new Money],
            'employment_status_id' => 'required|exists:employment_statuses,id'
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
            'phone' => 'sometimes|required|regex:/(0)[0-9]{10}/|unique:contact_customers,phone,' . $id,
            'email' => 'sometimes|required|email|unique:contact_customers,email,' . $id,
            'name' => 'sometimes|required|string',
            'monthly_income' => ['sometimes','required', new Money],
            'employment_status_id' => 'sometimes|required|exists:employment_statuses,id',
            'customer_stage_id' => 'sometimes|required|exists:customer_stages,id'
        ];
    }

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
