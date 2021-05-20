<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;

class MessageFilter extends BaseFilter
{
    /**
     * @param string $category
     */
    public function receiver(int $id){
        $this->builder->where('receiver_id', $id);
    }

}
