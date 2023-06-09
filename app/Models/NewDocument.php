<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class NewDocument extends Model
{
    //
    use SoftDeletes;

    public function documentable(){
        return $this->morphTo();
    }
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function toArray()
    {
        return [
            'user' => $this->user->full_name,
            'name' => $this->name,
            'documentable_type' => $this->documentable_type,
            'document_url' => $this->document_url,
            'status' => $this->status,
            'created_at' => $this->created_at

        ];
    }
}
