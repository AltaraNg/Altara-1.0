<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    protected $guarded = [];

    protected $hidden = ['created_at', 'updated_at'];

    public static function form()
    {
        $users = User::where('branch_id', auth('api')->user()->branch_id)
            ->select('id', 'full_name', 'staff_id', 'branch_id', 'date_of_exit')
            ->with(['branch' => function ($query) {
                return $query->select('id', 'name');
            }])
            ->get();

        $form = [];

        for ($i = 0; $i < count($users); $i++) {
            if(!isset($users[$i]->date_of_exit)){
                $userForm = [
                    'user' => $users[$i],
                    'user_id' => $users[$i]->id,
                    'branch_id' => 2,
                    'date' => date('Y-m-d'),
                    'arrival_time' => '',
                    'departure_time' => '',
                    'is_present' => 1,
                    'remark' => '',
                ];
                $form[$i] = $userForm;
            }
        }
        return $form;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }
}