<?php

namespace App\Http\Controllers;

use App\Models\PasswordResets;
use App\Models\User;
use App\Repositories\AuthRepository;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Validator;

class AuthController extends Controller
{
    /**
     * @var AuthRepository
     */
    private $authRepository;

    /**
     * AuthController constructor.
     * @param AuthRepository $authRepository
     */
    public function __construct(AuthRepository $authRepository)
    {

        $this->authRepository = $authRepository;
    }

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
                $user->api_token = Str::random(60);
                $user->save();
                return response()->json([
                    'user_id' => $user->id,
                    'auth' => true,
                    'role' => $user->role_id,
                    'api_token' => $user->api_token,
                    'user_name' => $user->full_name,
                    'portal_access' => $user->portal_access,
                    'branch_id' => $user->branch_id,
                    'tenant' => $user->tenant,
                    'in_house' => $user->tenant_id == 1,
                    'message' => 'You have successfully logged in'
                ], 200);
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
    public function user(Request $request)
    {
        $user = $request->user();   

        $data = [
            'user_id' => $user->id,
            'auth' => true,
            'role' => $user->role_id,
            'user_name' => $user->full_name,
            'portal_access' => $user->portal_access,
            'branch_id' => $user->branch_id,
            'tenant' => $user->tenant,
            'in_house' => $user->tenant_id == 1,
        ];
        
        return $this->sendSuccess(['user ' => $data]);
    }

    public function sendResetLinkEmail()
    {
        $data = $this->validate(request(), PasswordResets::$rules);
        $this->authRepository->sendResetLinkEmail($data);
        return response()->json(['data' => [], 'message' => 'Reset Email Successfully Sent'], 201);
    }

    public function reset()
    {
        $data = $this->validate(request(), PasswordResets::$resetRules);
        $this->authRepository->resetPassword($data);
        return response()->json(['data' => [], 'message' => 'Password reset Successful'], 200);
    }

    public function resetPassword($id)
    {
        $user = User::where('id', $id)->first();
        $gen_password = Str::random(8);
        $user->password = bcrypt($gen_password);
        $user->api_token = null;
        $user->save();
        return response()->json([
            'reset' => true,
            'password' => $gen_password
        ]);
    }
}
