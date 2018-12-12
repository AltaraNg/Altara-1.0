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
    public function __construct()
    {
        $this->middleware('auth:api')->only('logout');
    }

    public function create()
    {
        $form = User::form();
        $roles = Role::orderBy('name', 'asc')->get();
        $branches = Branch::orderBy('name', 'asc')->get();
        $categories = EmployeeCategory::orderBy('name', 'asc')->get();
        return response()->json([
            'form' => $form,
            'roles' => $roles,
            'branches' => $branches,
            'categories' => $categories
        ]);
    }

    public function register(Request $request)
    {
        Validator::extend('older_than', function ($attribute, $value, $parameters) {
            $minAge = (!empty($parameters)) ? (int)$parameters[0] : 18;
            return (new DateTime)->diff(new DateTime($value))->y >= $minAge;
        });

        $this->validate($request, [
            'email' => 'unique:users',
            'phone_number' => 'unique:users',
            'date_of_birth' => 'older_than:18'
        ]);
        $user = new User($request->all());
        $gen_password = str_random(10);
        $user->password = bcrypt($gen_password);
        $user->staff_id = $this->generateStaffID($request->category, $request->role);
        $user->hr_id = auth('api')->user()->id;
        $user->save();
        $form = User::form();
        return response()
            ->json([
                'form' => $form,
                'registered' => true,
                'password' => $gen_password,
                'staff_id' => $user->staff_id
            ]);
    }

    public function login(Request $request)
    {
        $message = 'Check your login details and try again!';
        $user = User::where('staff_id', $request->staff_id)->first();
        if (!$user) return response()->json([
            'staff_id' => ['The combination does not exist in our record!'],
            'message' => $message
        ], 422);
        if ($user->portal_access === 1) {
            if ($user && Hash::check($request->password, $user->password)) {
                $user->api_token = str_random(60);
                $user->save();
                return response()
                    ->json([
                        'user_id' => $user->id,
                        'auth' => true,
                        'role' => $user->role_id,
                        'api_token' => $user->api_token,
                        'user_name' => $user->full_name,
                        'portal_access' => $user->portal_access,
                        'message' => 'You have successfully logged in'
                    ]);
            }
            return response()->json([
                'staff_id' => ['Provided staff id and password does not match'],
                'message' => $message
            ], 422);
        } else return response()->json([
            'authenticated' => false,
            'message' => 'You are not authorized to access this portal!'
        ],423);

    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->api_token = null;
        $user->save();
        return response()->json(['logged_out' => true]);
    }

    public function edit($id)
    {
        $user = User::find($id);
        $categories = EmployeeCategory::orderBy('name', 'asc')->get();
        $roles = Role::select('name', 'id')->orderBy('name', 'asc')->get();
        $branches = Branch::select('name', 'id')->orderBy('name', 'asc')->get();
        return response()->json([
            'form' => $user,
            'roles' => $roles,
            'branches' => $branches,
            'categories' => $categories
        ]);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'email' => 'unique:users,email,' . $id,
            'phone_number' => 'unique:users,phone_number,' . $id
        ]);
        $user = User::find($id);
        if ($request->portal_access == 1 && isset($user->date_of_exit)) {
            return response()->json(['message' => 'Staff exited! Access cant be granted!'], 422);
        }
        if (isset($user->date_of_exit) || isset($request->date_of_exit)) {
            $request['portal_access'] = 0;
            $request->request->add(['api_token' => null]);
        }

        User::whereId($id)->update($request->all());
        return response()->json(['updated' => true]);
    }

    public function resetPassword($id)
    {
        $user = User::where('id', $id)->first();
        $gen_password = str_random(10);
        $user->password = bcrypt($gen_password);
        $user->api_token = null;
        $user->save();
        return response()->json([
            'reset' => true,
            'password' => $gen_password
        ]);
    }

    public function generateStaffID($category, $role)
    {
        $driver_role = [24, 25];
        if (in_array(intval($role), $driver_role)) {
            $lastID = User::whereIn('role_id', $driver_role)->orderBy('staff_id', 'desc')->first()->staff_id;
        } else {
            $lastID = User::where('category', $category)->whereNotIn('role_id', $driver_role)->orderBy('staff_id', 'desc')->first()->staff_id;
        }
        $num = '';
        $prefix = '';
        $nextNum = '';
        if (in_array(intval($role), [24, 25])) {
            $prefix = 'DD/';
            $nextNum = explode('/', $lastID)[1];
        } else {
            if ($category === 'contract') {
                $prefix = 'AC/C/';
                $nextNum = explode('/', $lastID)[2];
            }
            if ($category === 'permanent') {
                $prefix = 'ACL/';
                $nextNum = explode('/', $lastID)[1];
            }
            if ($category === 'freelance') {
                $prefix = 'AC/F/';
                $nextNum = explode('/', $lastID)[2];
            }
        }
        $nextNum = intval($nextNum) + 1;
        if (strlen((string)$nextNum) === 1) $num = '00' . $nextNum;
        else if (strlen((string)$nextNum) === 2) $num = '0' . $nextNum;
        else if (strlen((string)$nextNum) >= 3) $num = $nextNum;
        $id = (in_array(intval($role), $driver_role)) ? $prefix . $num : $prefix . $num . '/' . date("y");
        return $id;
    }
}