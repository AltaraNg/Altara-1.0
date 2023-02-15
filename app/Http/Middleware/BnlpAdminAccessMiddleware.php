<?php

namespace App\Http\Middleware;

use Closure;
use Error;

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
        if (env('BNLP_ADMIN_ACCESS') == null || $request->header('bnlp-admin-access') == null) {
            throw new Error('Please confirm bnlp key is set and also provided in request header');
        }

        if ($request->header('bnlp-admin-access') !== env('BNLP_ADMIN_ACCESS')) {
            throw new Error('Invalid access key provided');
        }
        return $next($request);
    }
}
