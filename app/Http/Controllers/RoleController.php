<?php

namespace App\Http\Controllers;

use App\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    //
    public function index(){
        $roles = Role::all();

        return response()->json(['roles' => $roles]);
    }

}
