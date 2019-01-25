<?php

namespace App\Http\Controllers;

use App\Branch;
use App\EmployeeCategory;
use App\Role;
use App\User;
use DateTime;
use Hash;
use Illuminate\Http\Request;
use Validator;

class AuthController extends Controller
{
   public function create()
   {
      /** fetch the user object empty form*/
      $form = User::form();
      /** fetch the available roles*/
      $roles = Role::orderBy('name', 'asc')->get();
      /** fetch the branches*/
      $branches = Branch::orderBy('name', 'asc')->get();
      /** fetch the employee categories */
      $categories = EmployeeCategory::orderBy('name', 'asc')->get();
      /** return values*/
      return response()->json([
         'form' => $form,
         'roles' => $roles,
         'branches' => $branches,
         'categories' => $categories
      ]);
   }

   public function register(Request $request)
   {
      /** validate the user inputs */
      Validator::extend('older_than', function ($attribute, $value, $parameters) {
         /** This is a custom made age validator. Staff must be more than 18 years*/
         $minAge = (!empty($parameters)) ? (int)$parameters[0] : 18;
         return (new DateTime)->diff(new DateTime($value))->y >= $minAge;
      });

      /** perform other validations*/
      $this->validate($request, [
         'email' => 'unique:users',
         'phone_number' => 'unique:users',
         'date_of_birth' => 'older_than:18'
      ]);
      /** create a new instance of user*/
      $user = new User($request->all());
      /** generate new password for new user*/
      $gen_password = str_random(8);
      /** encrypt the password*/
      $user->password = bcrypt($gen_password);
      /** generate a staff ID for the user*/
      $user->staff_id = $this->generateStaffID($request->category, $request->role);
      /** add the id of the hr that created the staff*/
      $user->hr_id = auth('api')->user()->id;
      /** save the user instance to db*/
      $user->save();
      /** fetch the user object empty form*/
      $form = User::form();
      /** return values including password etc*/
      return response()->json([
         'form' => $form,
         'registered' => true,
         'password' => $gen_password,
         'staff_id' => $user->staff_id
      ]);
   }

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

   public function edit($id)
   {
      /** fetch the user */
      $user = User::find($id);
      /** fetch employee category*/
      $categories = EmployeeCategory::orderBy('name', 'asc')->get();
      /** fetch roles*/
      $roles = Role::select('name', 'id')->orderBy('name', 'asc')->get();
      /** fetch branches*/
      $branches = Branch::select('name', 'id')->orderBy('name', 'asc')->get();
      /** return values including the user*/
      return response()->json([
         'form' => $user,
         'roles' => $roles,
         'branches' => $branches,
         'categories' => $categories
      ]);
   }

   public function update(Request $request, $id)
   {
      /** validate the user inputs*/
      $this->validate($request, [
         'email' => 'unique:users,email,' . $id,
         'phone_number' => 'unique:users,phone_number,' . $id
      ]);
      /** fetch the user*/
      $user = User::find($id);
      /** check is the request tries to grant access(ie portal_access == 1) to the user,
       * if the user has already exited the firm, the
       * portal access cannot be granted */
      if ($request->portal_access == 1 && isset($user->date_of_exit)) {
         return response()->json(['message' => 'Staff exited! Access cant be granted!'], 422);
      }
      /** at this point the user must have portal access and have not exited the firm
       * if the request has date of exit set den set portal access
       * to 0 and clear his/her api_token from the db*/
      if (isset($user->date_of_exit) || isset($request->date_of_exit)) {
         $request['portal_access'] = 0;
         $request->request->add(['api_token' => null]);
      }
      /** update the user and save in db*/
      User::whereId($id)->update($request->all());
      /** return response */
      return response()->json(['updated' => true]);
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

   public function generateStaffID($category, $role)
   {
      /** store the id of the driver roles*/
      $driver_role = [24, 25];
      /** check if the $role is driver*/
      if (in_array(intval($role), $driver_role)) {
         /** if the role is driver get the last driver id*/
         $lastID = User::whereIn('role_id', $driver_role)->orderBy('staff_id', 'desc')->first()->staff_id;
      } else {
         /**get the last id of contract or permanent or freelance staff that is not a driver role*/
         $lastID = User::where('category', $category)->whereNotIn('role_id', $driver_role)->orderBy('staff_id', 'desc')->first()->staff_id;
      }
      /** initialize method variables */
      $num = '';
      $prefix = '';
      $nextNum = '';
      if (in_array(intval($role), [24, 25])) {
         /** if role is driver, create a prefix */
         $prefix = 'DD/';
         /** the number value of the last staff id eg DD/01, 01 is at position arr[1] */
         $nextNum = explode('/', $lastID)[1];
      } else {
         /** if not driver is either contract, permanent, freelance*/
         /** for each of the following control statements the first step creates prefix and 2nd step get the number value of the $lastID*/
         if ($category === 'contract') {
            $prefix = 'AC/C/';
            /** format of $lastID = Al/C/128/18, our concern is the 128 ie the arr[2]*/
            $nextNum = explode('/', $lastID)[2];
         }
         if ($category === 'permanent') {
            $prefix = 'ACL/';
            /** format of $lastID = Al/128/18, our concern is the 128 ie the arr[1]*/
            $nextNum = explode('/', $lastID)[1];
         }
         if ($category === 'freelance') {
            $prefix = 'AC/F/';
            /** format of $lastID = Al/F/128/18, our concern is the 128 ie the arr[2]*/
            $nextNum = explode('/', $lastID)[2];
         }
      }
      /**add 1 to the $lastID number value*/
      $nextNum = intval($nextNum) + 1;
      /** set the number value of the new id($id) to be 3 digit long eg, 001 for 1, 019 for 19, 123 for 123*/
      if (strlen((string)$nextNum) === 1) $num = '00' . $nextNum;
      else if (strlen((string)$nextNum) === 2) $num = '0' . $nextNum;
      else if (strlen((string)$nextNum) >= 3) $num = $nextNum;
      /** construct the new id by merging all the generated parts*/
      $id = (in_array(intval($role), $driver_role)) ? $prefix . $num : $prefix . $num . '/' . date("y");
      /** return the new id */
      return $id;
   }

   /*public function runQuery()
   {
      $user = User::where('staff_id', 'AC/C/141/18')->first();

      $user->password = bcrypt('password');

      $user->save();

      return response()->json(['changed' => true]);
   }*/
}