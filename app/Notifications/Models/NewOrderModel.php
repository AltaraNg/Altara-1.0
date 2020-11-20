<?php

namespace App\Notifications\Models;


class NewOrderModel
{
    /**
     * @var string
     */
    private $data;
    /**
     * @var string
     */
    private $message;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function toArray() {
        return [
            'type' => $this->data,
            'message' => 'lkkk'
        ];
    }

}
