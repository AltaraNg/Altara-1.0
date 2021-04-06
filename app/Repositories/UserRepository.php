<?php


namespace App\Repositories;



use App\User;

class UserRepository extends Repository
{


    public function model()
    {
        return User::class;
    }
}
