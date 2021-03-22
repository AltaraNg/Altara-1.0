<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FeedBack extends Model
{
    //
    protected $guarded = [];

    public static function rules()
    {
        return [
            'feedback' => 'required|string',
            'todo_id' => 'required|exists:todos,id',

        ];
    }


}
