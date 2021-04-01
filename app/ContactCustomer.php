<?php

namespace App;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class ContactCustomer extends Model
{
    use Filterable, Notifiable;
    protected $guarded = [];
    protected $with = ['users:id,full_name', 'feedback'];

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
            'employment_status_id' => 'sometimes|required|exists:employment_statuses,id',
            'customer_stage_id' => 'sometimes|required|exists:customer_stages,id'
        ];
    }

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function feedback()
    {
        return $this->hasMany(Feedback::class, 'id');
    }
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

}
