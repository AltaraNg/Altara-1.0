<?php

namespace App;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use Filterable;
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public static function rules()
    {
        return [
            'read' => 'sometimes|boolean',


        ];
    }
    public static function updateRules()
    {
        return [
            'read' => 'sometimes|boolean',
        ];
    }

    public function toArray()
    {
        return [
            "contact_count" =>  $this->contact_count,
            'contacts' => $this->contacts,
            'created_at' => $this->created_at,
            'id' => $this->id,
            'message' => $this->message,
            'read' => $this->read,
            'receiver_id' => $this->receiver_id,
            'type' => $this->type,
            'sender' => $this->user->full_name
        ];
    }
}
