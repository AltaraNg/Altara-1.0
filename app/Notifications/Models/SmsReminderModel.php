<?php

namespace App\Notifications\Models;


class SmsReminderModel
{
    /**
     * @var string
     */
    private $type;
    /**
     * @var string
     */
    private $message;

    public function __construct(string $type, string $message)
    {
        $this->type = $type;
        $this->message = $message;
    }

    public function toArray() {
        return [
            'type' => $this->type,
            'message' => $this->message
        ];
    }

}
