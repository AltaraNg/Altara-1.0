<?php


namespace App\Repositories;


use App\InventoryStatus;

class InventoryStatusRepository extends Repository
{

    public function model()
    {
        return InventoryStatus::class;
    }
}
