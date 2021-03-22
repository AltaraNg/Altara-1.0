<?php


namespace App\Repositories;



use App\Todo;

class TodosRepository extends Repository
{

    public function model()
    {
        return Todo::class;
    }
}
