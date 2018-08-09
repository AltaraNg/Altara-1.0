<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

use Hash;

class AuthController extends Controller
{
    public function __construct()
    {

        $this->middleware('auth:api')->only('logout');

    }


    public function register(Request $request)
    {

        $this->validate($request, [

            'first_name' => 'required|max:255',

            'last_name' => 'required|max:255',

            'email' => 'required|email|unique:users',

            'staff_id' => 'required|string|unique:users',

            'staff_phone_number' => 'required|unique:users',

            'role_id' => 'required|max:5',

            'password' => 'required|confirmed|between:6,25'
        ]);


        $user = new User($request->all());

        $user->password = bcrypt($request->password);

        $user->save();

        return response()

            ->json([

                'registered' => true

            ]);

    }

    public function login(Request $request)
    {
        $this->validate($request, [

            //'email' => 'required|email',

            'staff_id' => 'required',

            'password' => 'required|between:6,25'

        ]);

        //$user = User::where('email', $request->email)

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

                    'user_name' => $user->first_name . ' ' .  $user->last_name,

                    'role' => $user->role_id,

                ]);

        }

        return response()

            ->json([

                'email' => ['Provided email and password does not match']

            ], 422);

    }

    public function logout(Request $request){

        $user = $request->user();

        $user->api_token = null;

        $user->save();

        return response()->json(['logged_out' => true]);

    }

}