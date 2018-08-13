<?php

namespace App\Http\Controllers;

use Hash;
use App\Role;
use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->only('logout');
    }

    public function create()
    {
        $form = User::form();

        $roles = Role::select('name','id')->get();

        return response()->json([

            'form' => $form,

            'roles' => $roles,

        ]);
    }

    public function register(Request $request)
    {
        /***validating the field below in the

        **backend because vue validation

        cant handle the validation**/

        $this->validate($request, [

            'email' => 'unique:users',

            'staff_id' => 'unique:users',

            'phone_number' => 'unique:users',

        ]);

        $user = new User($request->all());

        $gen_password = str_random(10);

        $user->password = bcrypt($gen_password);

        $user->hr_id = auth('api')->user()->id;

        $user->save();

        return response()

            ->json([

                'registered' => true,

                'user_password' => $gen_password,

            ]);

    }

    public function login(Request $request)
    {
        $this->validate($request, [

            'staff_id' => 'required',

            'password' => 'required|between:6,25'

        ]);

        $user = User::where('staff_id', $request->staff_id)

            ->first();

        if($user && Hash::check($request->password, $user->password)){

            $user->api_token = str_random(60);

            $user->save();

            return response()

                ->json([

                    'authenticated' => true,

                    'api_token' => $user->api_token,

                    'user_id' => $user->id,

                    'user_name' => $user->full_name,

                    'role' => $user->role_id,

                ]);

        }

        return response()

            ->json([

                'email' => ['Provided staff id and password does not match']

            ], 422);

    }

    public function logout(Request $request){

        $user = $request->user();

        $user->api_token = null;

        $user->save();

        return response()->json(['logged_out' => true]);

    }

}