<?php


namespace App\Http\Filters;


class TodoFilter extends BaseFilter
{
    public function user(string $user_id)
    {
        $this->builder->where('user_id', $user_id);
    }
}
