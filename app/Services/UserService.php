<?php

namespace App\Services;

use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserService
{
    public static function hasRole(User $user, string|int|array $role)
    {
       
        $userRole = DB::table('roles')->where('id', $user->role_id)->first();

        if (!$userRole) {
            return false;
        }
        if (is_array($role)) {
            
            foreach ($role as $key => $item) {
                if (self::hasRole($user, $item)) {
                    return true;
                }
            }
            return false;
        }

        

        if (is_string($role)) {
            return $userRole->name ==  $role  ||  $userRole->slug ==  $role;
        }

        if (is_int($role)) {
            return $userRole->id ==  $role;
        }

        return false;
    }

    public static function hasAnyRole(User $user, array $roles)
    {
        return self::hasRole($user, $roles);
    }
}
