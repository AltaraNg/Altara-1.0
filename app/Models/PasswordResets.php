<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PasswordResets extends Model
{
    protected $guarded = [];

    protected $primaryKey = 'email';

    public $incrementing = false;

    const UPDATED_AT = null;

    public static $rules = [
        'email' => 'required|email|exists:users,email'
    ];

    public static $resetRules = [
        'token' => 'required|exists:password_resets,token',
        'password' => 'required|confirmed'
    ];
}
