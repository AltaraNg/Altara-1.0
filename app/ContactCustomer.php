<?php

namespace App;

use App\Http\Filters\Filterable;
use App\Rules\Phone;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class ContactCustomer extends Model
{
    use Filterable, Notifiable;
    protected $guarded = [];
    protected $with = ['users:id,full_name', 'feedback', 'customerStage:id,name', 'employmentStatus:id,name'];

    /**
     * Validation rules
     *
     * @return array
     * @var array
     */

    public static function rules()
    {
        return [
            'phone' => ['required', new Phone, 'unique:contact_customers,phone'],
            'email' => 'sometimes|required|email|unique:contact_customers,email',
            'name' => 'sometimes|required|string',
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
            'email' => 'sometimes|email|nullable|unique:contact_customers,email,' . $id,
            'name' => 'sometimes|required|string',
            'employment_status_id' => 'sometimes|required|exists:employment_statuses,id',
            'customer_stage_id' => 'sometimes|required|exists:customer_stages,id',
            'user_id' => 'sometimes|required|exists:users,id'
        ];
    }

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function feedback()
    {
        return $this->hasMany(Feedback::class, 'customer_id');
    }
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }
    public function customerStage()
    {
        return $this->belongsTo(CustomerStage::class);
    }
    public function employmentStatus()
    {
        return $this->belongsTo(EmploymentStatus::class);
    }

}
