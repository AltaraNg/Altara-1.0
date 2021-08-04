<?php


namespace App\Repositories;



use App\Feedback;

class ReasonRepository extends Repository
{

    public function model()
    {
        return Reason::class;
    }
}
