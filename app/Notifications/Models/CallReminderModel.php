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
     * CallReminderModel constructor.
     * @param string $type
     * @param string $feedback
     * @param string $status
     */
    public function __construct(string $type, string $feedback, string $status)
    {
        $this->type = $type;
        $this->feedback = $feedback;
        $this->status = $status;
    }

    public function toArray() {
        return [
            'type' => $this->type,
            'feedback' => $this->feedback,
            'status' => $this->status
        ];
    }

}
