<?php

namespace App;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use Filterable;
    protected $guarded = [];
    protected $table = 'todos';

    public static function rules()
    {
        return [
            'todo' => 'required|string',
            'type' => 'required|string',
            'status' => 'required|string',
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
        return $this->hasOne(ContactCustomer::class, 'customer_id');
    }




    //
}
