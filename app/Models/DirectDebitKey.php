<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DirectDebitKey extends Model
{
    protected $guarded = [];
    protected $table = "dd_k";
    public static function rules()
    {
        return [
            'name' => 'required|string',
            'key' => 'required|string'
        ];
    }
}
