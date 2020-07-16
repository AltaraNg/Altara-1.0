<?php

namespace App;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class ProductTransfer extends Model
{
    use Filterable;
    protected $guarded = [];

    /**
     * Validation rules
     *
     * @return array
     * @var array
     */

    public static function rules()
    {
        return [
            'branch_id' => 'required|exists:branches,id',
            'product_id' => 'required|exists:products,id'
        ];
    }

    /**
     * Validation rules
     *
     * @return array
     * @var array
     */

    public static function updateRules()
    {
        return [
            'branch_id' => 'sometimes|required|exists:branches,id',
            'product_id' => 'sometimes|required|exists:products,id'
        ];
    }


    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'product' => $this->product,
            'branch' => $this->branch->name,
            'user' => $this->user->full_name
        ];
    }
}
