<?php

namespace App\Http\Middleware;

use Closure;
use Error;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class BnlpAdminAccessMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        Log::info($request->headers);
        if (env('BNLP_ADMIN_ACCESS') == null || $request->header('bnlp-admin-access') == null) {
            throw new Error('Please confirm bnlp key is set and also provided in request header');
        }

        if ($request->header('bnlp-admin-access-auth-user-id') == null) {
            Log::info('The currently authenticated user id is not supplied');
        } else {
            $userID = $request->header('bnlp-admin-access-auth-user-id');
            Auth::loginUsingId($userID);
        }

        if ($request->header('bnlp-admin-access') !== env('BNLP_ADMIN_ACCESS')) {
            throw new Error('Invalid access key provided');
        }

        return $next($request);
    }
}
