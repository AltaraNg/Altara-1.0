<?php

namespace App\Repositories;

use App\ProductTransfer;

class ProductTransferRepository extends Repository
{
    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return ProductTransfer::class;
    }
}
