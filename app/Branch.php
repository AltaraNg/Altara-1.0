<?php

namespace App;

use App\Helper\DataViewer;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    use DataViewer;

    protected $guarded = [];

    protected $hidden = [];

    public static $columns = ['id', 'name', 'state_id', 'phone_english', 'phone_yoruba', 'email', 'description','status'];

    protected $table = 'branches';

    public static function form()
    {
        $user = auth('api')->user();
        return [
            'employee_name' => $user->full_name,
            'employee_id' => $user->staff_id,
            'user_id' => $user->id,
            'name' => '',
            'phone_english' => '',
            'phone_yoruba' => '',
            'account_name' => '',
            'account_number' => '',
            'email' => '',
            'bank' => '',
            'state_id' => '',
            'status' => '',
            'description' => ''
        ];
    }

    //a branch is inside one state : branch->state
    public function state()
    {
        return $this->belongsTo(State::class);
    }

    //a branch has many users : branch->users
    public function users()
    {
        return $this->hasMany(User::class);
    }

    //a branch has many customers : branch->customers
    public function customers()
    {
        return $this->hasMany(Customer::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function bank()
    {
        return $this->belongsTo(Bank::class);
    }
}
