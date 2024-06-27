<?php


namespace App\Repositories;


use App\Models\ReminderValue;

class ReminderValueRepository extends Repository
{
    public function model()
    {
        return ReminderValue::class;
    }
}
