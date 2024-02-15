<?php

namespace App\Http\Middleware;

use App\Exceptions\InvalidApiKeyException;
use Error;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class MobileAppMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        
        if (env('LOAN_APP_API_KEY') == null || $request->header('loan-app-api-key') == null) {
            throw new InvalidApiKeyException('Please confirm loan app api key is set and also provided in request header');
        }

        if ($request->header('loan-app-auth-cust-id') == null) {
            Log::info('The currently authenticated user id is not supplied');
        } 

        if ($request->header('loan-app-api-key') !== env('LOAN_APP_API_KEY')) {
            throw new InvalidApiKeyException('Invalid access key provided');
        }

        return $next($request);
    }
}
