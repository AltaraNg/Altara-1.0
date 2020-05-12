<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $guarded = [];

    public function commentable() {
        return $this->morphTo();
    }

    /**
     * @return array
     */
    public function toArray()
    {
        return [
            'commentable_id' => $this->commentable_id,
            'commentable_type' => $this->commentable_type,
            'comment' => $this->comment
        ];
    }
}
