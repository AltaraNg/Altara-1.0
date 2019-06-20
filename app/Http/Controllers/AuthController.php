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
      /** create custom error message*/
      $message = 'Check your login details and try again!';
      /** fetch user*/
      $user = User::where('staff_id', $request->staff_id)->first();
      /** check if user record exist*/
      if (!$user) return response()->json([
         /** user doesnt exist send an error response*/
         'staff_id' => ['The combination does not exist in our record!'],
         'message' => $message
      ], 422);
      /** at this point the user exists. hence check portal access*/
      if ($user->portal_access === 1) {
         /** user have portal access*/
         /** check is the supplied password matched password in the database*/
         if ($user && Hash::check($request->password, $user->password)) {
            /** password correct*/
            /** generate and API token*/
            $user->api_token = str_random(60);
            /** save api_toke in the db*/
            $user->save();
            /** return values including api_token and others*/
            return response()->json([
               'user_id' => $user->id,
               'auth' => true,
               'role' => $user->role_id,
               'api_token' => $user->api_token,
               'user_name' => $user->full_name,
               'portal_access' => $user->portal_access,
               'message' => 'You have successfully logged in'
            ]);
         }
         /** here the password doesnt match return response with password mismatch error*/
         return response()->json([
            'staff_id' => ['Provided staff id and password does not match'],
            'message' => $message
         ], 422);
      } else {
         /** user doesnt have portal access return response with error code*/
         return response()->json([
            'authenticated' => false,
            'message' => 'You are not authorized to access this portal!'
         ], 423);
      }
   }

   public function logout(Request $request)
   {
      /**init user*/
      $user = $request->user();
      /** empty api token*/
      $user->api_token = null;
      /** save api_token(empty api token) on db*/
      $user->save();
      /** return response with logged_out flag*/
      return response()->json(['logged_out' => true]);
   }

   public function resetPassword($id)
   {
      /** fetch the user*/
      $user = User::where('id', $id)->first();
      /** generate a new password*/
      $gen_password = str_random(8);
      /** encrypt password*/
      $user->password = bcrypt($gen_password);
      /** remove api token to log him out from any existing session*/
      $user->api_token = null;
      /** update details*/
      $user->save();
      /** return response*/
      return response()->json([
         'reset' => true,
         'password' => $gen_password
      ]);
   }
}