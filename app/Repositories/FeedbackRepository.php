<?php


namespace App\Repositories;



use App\FeedBack;

class TodoRepository extends Repository
{

    public function model()
    {
        return FeedBack::class;
    }
}
