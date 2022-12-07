<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;

class MessageFilter extends BaseFilter
{
    /**
     * @param string $id
     */
    public function receiver(int $id){
        $this->builder->where('receiver_id', $id);
    }

    public function unread(string $status){
        $this->builder->where('read', null);
    }

}
