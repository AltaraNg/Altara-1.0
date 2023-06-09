<?php


namespace App\Repositories;


use App\Models\Message;

class MessageRepository extends Repository
{

    public function model()
    {
        return Message::class;
    }


}
