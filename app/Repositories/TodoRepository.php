<?php


namespace App\Repositories;



use App\Todo;

class TodoRepository extends Repository
{

    public function model()
    {
        return Todo::class;
    }
}
