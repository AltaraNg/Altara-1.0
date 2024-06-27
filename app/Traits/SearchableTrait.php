<?php
//https://echebaby.com/blog/2021-02-13-searchable-trait-to-search-in-multiple-columns-with-laravel/
namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;

trait SearchableTrait
{

    /**
     * Scope a query to search for term in the attributes
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeSearch(Builder $query)
    {
        [$searchTerm, $attributes] = $this->parseArguments(func_get_args());
        if (!$searchTerm || !$attributes) {
            return $query;
        }

        return $query->where(function (Builder $query) use ($searchTerm, $attributes) {
            foreach ($attributes as $attribute) {
                $query->when(str_contains($attribute, '.'),
                    function (Builder $query) use ($searchTerm, $attribute) {
                        [$relationName, $relationAttribute] = explode('.', $attribute);
                        $query->orWhereHas($relationName, function (Builder $query) use ($searchTerm, $relationAttribute) {
                            $query->where($relationAttribute, 'LIKE', "%{$searchTerm}%");
                        });
                    }, function (Builder $query) use ($searchTerm, $attribute) {
                        $query->orWhere($attribute, 'LIKE', "%{$searchTerm}%");
                    }
                );
            }
        });
    }

    private function parseArguments(array $arguments): array
    {
        $defaultKey = $this->getDefaultKey();
        $arguments_count = count($arguments);
        switch ($arguments_count) {
            case 1:
                return [request($defaultKey), $this->searchableAttribute()];
                break;
            case 2:
                if (is_string($arguments[1])) {
                    return [$arguments[1], $this->searchableAttribute()];
                } else {
                    return [$defaultKey, $arguments[1]];
                }
                break;
            case 3:
                if (is_string($arguments[1])) {
                    return [$arguments[1], $arguments[2]];
                } else {
                    return [$arguments[2], $arguments[1]];
                }
                break;
            default:
                return [null, []];
                break;
        }
    }

    protected function getDefaultKey(): string
    {
        return 'searchTerm';
    }

    public function searchableAttribute()
    {
        //check if method searchable exists on model
        if (method_exists($this, 'searchable')) {
            return $this->searchable();
        }
        //check if property called searchable exists on model else return an empty array
        return property_exists($this, 'searchable') ? $this->searchable : [];
    }
}
