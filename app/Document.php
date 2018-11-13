<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    protected $guarded = [];

    protected $hidden = [];

    //a document was uploaded by a user/employee : document->user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    //a document belong to a customer/a document is for a particular customer : document->customer
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}
