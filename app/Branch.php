<?php

namespace App;

use App\Helper\DataViewer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Branch extends Model
{
    /** this is a generic trait created to serve as a generic
     * scope for fetching and paginating the
     * model where it is called */
    use DataViewer, Notifiable;

    protected $guarded = [];

    protected $hidden = [];

    /** columns to be used to render the list(Data viewer) of branches in the view*/
    public static $columns = ['id', 'name', 'state_id','category', 'phone_english', 'phone_yoruba', 'email', 'description', 'status'];

    protected $table = 'branches';

    /** this is the branch object form, it is sent to the js
     * view when the branch creation
     * form is required */
    public static function form() : iterable
    {
        $user = auth('api')->user();
        return [
            'employee_name' => $user->full_name,
            'employee_id' => $user->staff_id,
            'user_id' => $user->id,
            'name' => '',
            'category' => '',
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

    /** a branch is inside one state : branch->state */
    public function state()
    {
        return $this->belongsTo(State::class);
    }

    /** a branch has many users : branch->users */
    public function users()
    {
        return $this->hasMany(User::class);
    }

    /** a branch has many customers : branch->customers */
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

    public function products()
    {
        return $this->hasMany(Product::class, 'branch_id', 'id');
    }

    public function attendances()
    {
        return $this->hasMany(Attendance::class);
    }

    public function inventories()
    {
        return $this->hasMany(Inventory::class);
    }

    public function paystackBranches()
    {
        return $this->hasOne(PaystackBranch::class);
    }

}
