<?php

namespace App\Notifications\Models;


class CallReminderModel
{
    /**
     * @var string
     */
    private $type;
    /**
     * @var string
     */
    private $feedback;
    /**
     * @var string
     */
    private $status;
    /**
     * @var string
     */
    private $promise_date;

    /**
     * CallReminderModel constructor.
     * @param string $type
     * @param string $feedback
     * @param string $status
     * @param string $promise_date
     */
    public function __construct(string $type, string $feedback, string $status, string $promise_date)
    {
        $this->type = $type;
        $this->feedback = $feedback;
        $this->status = $status;
        $this->promise_date = $promise_date;
    }

    public function toArray() {
        return [
            'type' => $this->type,
            'feedback' => $this->feedback,
            'status' => $this->status,
            'promise_date' => $this->promise_date,
            'user' => auth()->user()->full_name
        ];
    }

}
