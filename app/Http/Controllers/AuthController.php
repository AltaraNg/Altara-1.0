<?php

namespace App\Http\Controllers;

use App\User;
use Hash;
use Illuminate\Http\Request;
use Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $message = 'Check your login details and try again!';
        $user = User::where('staff_id', $request->staff_id)->first();

        if (!$user) return response()->json([
            'staff_id' => ['The combination does not exist in our record!'],
            'message' => $message
        ], 404);

        if ($user->portal_access === 1) {
            if ($user && Hash::check($request->password, $user->password)) {
                $user->api_token = str_random(60);
                $user->save();
                return response()->json([
                    'user_id' => $user->id,
                    'auth' => true,
                    'role' => $user->role_id,
                    'api_token' => $user->api_token,
                    'user_name' => $user->full_name,
                    'portal_access' => $user->portal_access,
                    'branch_id' => $user->branch_id,

                    'message' => 'You have successfully logged in'
                ]);
            }
            return response()->json([
                'staff_id' => ['Provided staff id and password does not match'],
                'message' => $message
            ], 401);
        } else {
            return response()->json([
                'authenticated' => false,
                'message' => 'You are not authorized to access this portal!'
            ], 403);
        }
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->api_token = null;
        $user->save();
        return response()->json(['logged_out' => true]);
    }

    public function resetPassword($id)
    {
        $user = User::where('id', $id)->first();
        $gen_password = str_random(8);
        $user->password = bcrypt($gen_password);
        $user->api_token = null;
        $user->save();
        return response()->json([
            'reset' => true,
            'password' => $gen_password
        ]);
    }
}
