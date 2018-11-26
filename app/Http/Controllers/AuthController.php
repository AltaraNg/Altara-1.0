<?php

namespace App\Http\Controllers;

use App\Branch;
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
        $roles = Role::select('name', 'id')->orderBy('name', 'asc')->get();
        $branches = Branch::select('name', 'id')->orderBy('name', 'asc')->get();
        return response()->json([
            'form' => $form,
            'roles' => $roles,
            'branches' => $branches,
        ]);
    }

    public function register(Request $request)
    {
        Validator::extend('older_than', function($attribute, $value, $parameters)
        {
            $minAge = ( ! empty($parameters)) ? (int) $parameters[0] : 18;
            return (new DateTime)->diff(new DateTime($value))->y >= $minAge;
        });

        $this->validate($request, [
            'email' => 'unique:users',
            'staff_id' => 'unique:users',
            'phone_number' => 'unique:users',
            'date_of_birth' => 'older_than:18',
        ]);
        $user = new User($request->all());
        $gen_password = str_random(10);
        $user->password = bcrypt($gen_password);
        $user->hr_id = auth('api')->user()->id;
        $user->save();
        $form = User::form();
        return response()
            ->json([
                'registered' => true,
                'password' => $gen_password,
                'form' => $form,
            ]);
    }

    public function login(Request $request)
    {
        $user = User::where('staff_id', $request->staff_id)->first();

        if (!$user) {
            return response()->json(['staff_id' => ['The combination does not exist in our record!']], 422);
        }

        if ($user->portal_access === 1) {
            if ($user && Hash::check($request->password, $user->password)) {
                $user->api_token = str_random(60);
                $user->save();
                return response()
                    ->json([
                        'authenticated' => true,
                        'api_token' => $user->api_token,
                        'user_id' => $user->id,
                        'user_name' => $user->full_name,
                        'role' => $user->role_id,
                        'portal_access' => $user->portal_access,
                    ]);
            }
            return response()->json(['staff_id' => ['Provided staff id and password does not match']], 422);
        } else {
            return response()
                ->json([
                    'authenticated' => false,
                    'message' => 'You are not authorized to access this portal. Please meet the authority to verify your portal access status!'
                ]);
        }
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
        $branches = Branch::select('name', 'id')->orderBy('name', 'asc')->get();
        $roles = Role::select('name', 'id')->orderBy('name', 'asc')->get();
        $user = User::find($id);
        return response()->json([
            'roles' => $roles,
            'form' => $user,
            'branches' => $branches,
        ]);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'email' => 'unique:users,email,' . $id,
            'staff_id' => 'unique:users,staff_id,'.$id,
            'phone_number' => 'unique:users,phone_number,'.$id,
        ]);

        $user = User::find($id);
        if($request->portal_access == 1 && isset($user->date_of_exit)){
            return response()->json([
                'message' => 'Staff exited! Access cant be granted!',
            ], 422);
        }
        if(isset($user->date_of_exit) || isset($request->date_of_exit)) {
            $request['portal_access'] = 0 ;
            $request->request->add(['api_token' => null]);
        }

        User::whereId($id)->update($request->all());
        return response()->json([
            'updated' => true,
        ]);
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
            'password' => $gen_password,
        ]);
    }
}