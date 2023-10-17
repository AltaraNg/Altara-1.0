<?php

namespace App\Scopes;

use App\Helper\Constants;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Support\Facades\Auth;

class FilterByTenantIdScope implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $builder
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @return void
     */
    public function apply(Builder $builder, Model $model)
    {
        /** @var User $user */
        if (Auth::hasUser()) {
            $user = auth()->user();
            if (!UserService::hasAnyRole($user, Constants::ADMIN_ROLES)) {
                return $builder->where('tenant_id', $user->tenant_id);
            }
        }
    }
}
