<?php


namespace App\Repositories;


use App\Models\InventoryStatus;

class InventoryStatusRepository extends Repository
{

    public function model()
    {
        return InventoryStatus::class;
    }
}
