<?php

namespace App;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    //
    use Filterable;
    protected $guarded = [];
    protected $with = ['reason'];
    protected $table = 'feed_backs';

    public static function rules()
    {
        return [
            'reason_id' => 'required|exists:reasons,id',
            'todo_id' => 'sometimes|exists:todos,id',
            'notes' => 'sometimes|string',
            'user_id' => 'required|exists:users,id',
            'customer_id' => 'required|exists:contact_customers,id'

        ];
    }
    public static function updateRules()
    {
        return [
            'reason_id' => 'sometimes|required|exists:reasons,id',
            'todo_id' => 'sometimes|exists:todos,id',
            'notes' => 'sometimes|string',
            'user_id' => 'sometimes|required|exists:users,id',
            'customer_id' => 'sometimes|required|exists:contact_customers,id'

        ];
    }

    public function reason()
    {
        return $this->hasOne(Reason::class);
    }

    public function customer()
    {
        return $this->belongsTo(ContactCustomer::class, 'customer_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function todo()
    {
        return $this->belongsTo(Todo::class);
    }


}
