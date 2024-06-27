<?php

namespace App\Models;

use App\Http\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;

class RenewalPrompter extends Model
{
    //
    use Filterable;
    protected $guarded = [];

    public function renewalPrompterStatus()
    {
      return  $this->belongsTo(RenewalPrompterStatus::class);
    }

    public function order()
    {
        return $this->belongsTo(NewOrder::class, 'order_id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function  allowedAttributes() :\Illuminate\Support\Collection {
        return collect([
            'order_id' => $this->order_id ?? '',
            'renewal_prompter_status' => $this->renewalPrompterStatus->name ?? '',
            'owner' => $this->order->owner->full_name ?? '',
            'creator' =>  $this->creator->full_name ?? '',
            'branch' => $this->order->branch->name ?? '',
            'feedback' => $this->feedback ?? '',
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ]);
    }

}
