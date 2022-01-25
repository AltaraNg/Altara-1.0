<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Arr;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);

        //Macro
        Builder::macro('appplyLikeOnMultipleSearchTerms', function ($attribute, array $searchTerms) {
            $this->where(function (Builder $query) use ($attribute, $searchTerms) {
                foreach (Arr::wrap($searchTerms) as $searchTerm) {
                    $query->orWhere($attribute, 'LIKE', "%{$searchTerm}%");
                }
            });
            return $this;
        });

    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
