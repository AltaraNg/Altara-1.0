<?php


namespace App\Repositories;



use App\Models\Todo;

class TodosRepository extends Repository
{

    public function model()
    {
        return Todo::class;
    }
}
