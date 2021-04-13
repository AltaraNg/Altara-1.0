<?php


namespace App\Http\Filters;

use Illuminate\Support\Carbon;

class TodoFilter extends BaseFilter
{
    public function user(string $user_id)
    {
        $this->builder->where('user_id', $user_id);
    }

    public function customer(string $customer)
    {
        $this->builder->whereHas('customer', function ($query) use ($customer) {
            $query->where('name', 'like', '%' . $customer .'%');
        });
    }

    public function fromDate(string $date, $column = 'due_date')
    {
        $this->builder->whereDate($column, '>=', $date)
            ->whereDate($column, '<=', $this->request->toDate ?? Carbon::now());
    }

    public function name(string $name)
    {
        $this->builder->where('todo', 'like', '%' . $name . '%');
    }
}
