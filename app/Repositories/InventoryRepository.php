<?php


namespace App\Repositories;


use App\Inventory;

class InventoryRepository extends Repository
{

    public function model()
    {
        return Inventory::class;
    }

}
