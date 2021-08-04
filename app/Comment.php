<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $guarded = [];

    public function commentable() {
        return $this->morphTo();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return array
     */
    public function toArray()
    {
        return [
            'commentable_id' => $this->commentable_id,
            'commentable_type' => $this->commentable_type,
            'user' => $this->user->full_name,
            'comment' => $this->comment
        ];
    }
}
