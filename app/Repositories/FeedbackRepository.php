<?php


namespace App\Repositories;



use App\FeedBack;

class FeedbackRepository extends Repository
{

    public function model()
    {
        return FeedBack::class;
    }
}
