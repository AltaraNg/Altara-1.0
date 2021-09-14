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
}
