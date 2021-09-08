<?php


namespace App\Repositories;

use App\ProspectActivity;

class ProspectActivityRepository extends Repository
{
    public function model()
    {
        return ProspectActivity::class;
    }
}
