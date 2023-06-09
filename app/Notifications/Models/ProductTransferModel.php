<?php

namespace App\Notifications\Models;


use App\Models\Branch;
use App\Models\Inventory;

class ProductTransferModel
{
    /**
     * @var string
     */
    private $to;
    /**
     * @var int
     */
    private $inventory;
    /**
     * @var int
     */
    private $from;

    public function __construct(int $to, int $from, int $inventory)
    {
        $this->to = $to;
        $this->inventory = $inventory;
        $this->from = $from;
    }

    public function toArray() {
        return [
            'to_branch' => Branch::find($this->to)->name,
            'from' => $this->from,
            'from_branch' => Branch::find($this->from)->name,
            'initiator' => auth()->user()->full_name,
            'inventory' => Inventory::find($this->inventory),
        ];
    }

}
