<?php


namespace App\Repositories;

use App\Models\ProspectActivity;

class ProspectActivityRepository extends Repository
{
    public function model()
    {
        return ProspectActivity::class;
    }
}
