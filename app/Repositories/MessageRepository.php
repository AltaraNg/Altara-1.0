<?php


namespace App\Repositories;


use App\Message;

class MessageRepository extends Repository
{

    public function model()
    {
        return Message::class;
    }


}
