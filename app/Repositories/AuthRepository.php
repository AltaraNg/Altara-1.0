<?php

namespace App\Repositories;

use App\Events\SendPasswordResetLinkEvent;
use App\Helper\ExtractRequestObject;
use App\Helper\OrderObject;
use App\Models\EmailVerification;
use App\Models\PasswordResets;
use App\Models\Tenant;
use App\Models\User;
use App\Notifications\ClientEmailVerificationNotification;
use App\Notifications\EmailVerificationNotification;

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

    public function sendEmailVerification($email)
    {
        $data['token'] = md5($email . '_' . time() . '_' . mt_rand(1, 1000000));
        $response = EmailVerification::query()->updateOrCreate(['email' => $email], $data);
        $user = User::where('email', $response->email)->first();
        if (config('app.env') !== 'production') {
            $user = User::where('email', config('app.'))->first();
        }
        $user->notify(new EmailVerificationNotification($user, $data['token']));
        return $response;
    }
    public function sendClientEmailVerification(Tenant $tenant, User $user)
    {

        $token = md5($user->email . '_' . time() . '_' . mt_rand(1, 1000000));
        $response = EmailVerification::query()->updateOrCreate(['email' => $user->email], ['token' => $token]);

        if (config('app.env') !== 'production') {
            $user = User::where('email', config('app.technology_email'))->first();
        }
        $verificationLink = config('app.client_frontend_url')  . "verify/email?token=". $token;
        $user->notify(new ClientEmailVerificationNotification($tenant, $verificationLink));
        return $response;
    }

    public function verifyEmail($token)
    {
       $emailVerification =  EmailVerification::query()->where('token', $token)->first();
       if (!$emailVerification) {
           return false;
       }
       /** @var User $user  */
       $user = User::query()->where('email', $emailVerification->email)->first();
       if (!$user) {
           return false;
       }
       $user->markEmailAsVerified();
//       $emailVerification->delete();
       return true;
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

    public function changePassword($email, $passowrd)
    {
        $user = User::where('email', $email)->first();
        if (!$user){
            return false;
        }
        if (!$user->email_verified_at) {
            return false;
        }
        $user->password = bcrypt($passowrd);
        $user->save();
        return true;
    }

}
