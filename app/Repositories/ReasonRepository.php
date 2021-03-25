<?php


namespace App\Repositories;



use App\FeedBack;

class ReasonRepository extends Repository
{

    public function model()
    {
        return Reason::class;
    }
}
