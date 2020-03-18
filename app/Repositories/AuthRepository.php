<?php

namespace App\Repositories;

use App\Events\SendPasswordResetLinkEvent;
use App\Helper\ExtractRequestObject;
use App\Helper\OrderObject;
use App\PasswordResets;
use App\User;

class AuthRepository extends Repository
{
    use OrderObject, ExtractRequestObject;

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return User::class;
    }

    public function sendResetLinkEmail($data)
    {
        $data['token'] = md5($data['email'] . '_' . time() . '_' . mt_rand(1, 1000000));
        $response = PasswordResets::updateOrCreate(['email' => $data['email']], $data);
        $user = User::where('email', $response->email)->first()->full_name;
        event(new SendPasswordResetLinkEvent($response, $user));
        return $response;
    }

    public function resetPassword($data)
    {
        $reset = PasswordResets::where('token', $data['token'])->first();
        $user = User::where('email', $reset->email)->first();
        $user->password = bcrypt($data['password']);
        $user->save();
        $reset->delete();
        return response()->json(['data' => [], 'message' => 'Password reset Successful'], 200);
    }


}
