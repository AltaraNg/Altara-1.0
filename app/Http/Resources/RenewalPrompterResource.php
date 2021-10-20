<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RenewalPrompterResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'order_id' => $this->order_id,
            'renewal_prompter_status' => $this->renewalPrompterStatus->name ?? '',
            'owner' => $this->order->owner->full_name ?? '',
            'creator' =>  $this->order->user->full_name ?? '',
            'branch' => $this->order->branch->name ?? '',
            'feedback' => $this->feedback,
        ];
    }
}
