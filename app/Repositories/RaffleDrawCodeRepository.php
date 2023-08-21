<?php

namespace App\Repositories;

use App\Models\RaffleDrawCode;

class RaffleDrawCodeRepository extends Repository
{

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return RaffleDrawCode::class;
    }
}
