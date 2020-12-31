<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
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
