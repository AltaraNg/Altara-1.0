<?php


namespace App\Repositories;


use App\ReminderValue;

class ReminderValueRepository extends Repository
{
    public function model()
    {
        return ReminderValue::class;
    }
}
