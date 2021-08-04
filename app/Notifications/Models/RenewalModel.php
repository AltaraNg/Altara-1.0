<?php

namespace App\Notifications\Models;


class RenewalModel
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
    private $date;

    /**
     * CallReminderModel constructor.
     * @param string $type
     * @param string $feedback
     * @param string $status
     * @param string $date
     */
    public function __construct(string $feedback, string $status, string $date)
    {
        $this->feedback = $feedback;
        $this->status = $status;
        $this->date = $date;
    }

    public function toArray()
    {
        return [
            'feedback' => $this->feedback,
            'status' => $this->status,
            'date' => $this->date,
            'user' => auth()->user()->full_name
        ];
    }
}
