<?php

namespace App\Repositories;

use App\Recollection;

class RecollectionRepository extends Repository
{
    public function model()
    {
        return Recollection::class;
    }
}
