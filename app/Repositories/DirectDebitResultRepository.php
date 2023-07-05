<?php

namespace App\Repositories;

use App\Models\DirectDebitResult;

class DirectDebitResultRepository extends Repository
{
    public function model()
    {
        return DirectDebitResult::class;
    }
}
