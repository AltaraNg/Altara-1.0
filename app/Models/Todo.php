<?php

namespace App\Models;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use Filterable;
    protected $guarded = [];
    protected $table = 'todos';
    protected $with = ['customer:id,name'];

    public static function rules()
    {
        return [
            'todo' => 'required|string',
            'type' => 'required|string',
            'status' => 'sometimes|string',
            'due_date' => 'sometimes|string',
            'customer_id' => 'required|exists:contact_customers,id',
            'user_id' => 'required|exists:users,id'
        ];
    }

    public static function updateRules()
    {
        return [
            'todo' => 'sometimes|required|string',
            'type' => 'sometimes|required|string',
            'status' => 'sometimes|required|string',
            'due_date' => 'sometimes|string',
            'customer_id' => 'sometimes|required|exists:contact_customers,id',
            'user_id' => 'sometimes|required|exists:users,id'
        ];
    }


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function customer()
    {
        return $this->hasOne(ContactCustomer::class, 'id', 'customer_id');
    }

    public function feedback()
    {
        return $this->hasOne(Feedback::class);
    }

    public function prospectActivities()
    {
        return $this->morphMany(ProspectActivity::class, 'prospectActivityType', 'prospect_activity_type', 'prospect_activity_type_id');
    }


    //
}
