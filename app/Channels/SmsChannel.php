<?php

namespace App\Channels;

use App\Exceptions\AException;
use App\Services\MessageService;
use Illuminate\Notifications\Notification;

class SmsChannel
{
    /**
     * @var MessageService
     */
    private $messageService;

    /**
     * SmsChannel constructor.
     * @param MessageService $messageService
     */
    public function __construct(MessageService $messageService)
    {
        $this->messageService = $messageService;
    }

    /**
     * Send the given notification.
     *
     * @param mixed $notifiable
     * @param \Illuminate\Notifications\Notification $notification
     * @return void
     * @throws AException
     */
    public function send($notifiable, Notification $notification)
    {
        $message = $notification->toSms($notifiable);
        // Send notification to the $notifiable instance...
        $resp = $this->messageService->sendMessage($this->appendPrefix($notifiable->phone), $message);
        if ($resp->messages[0]->status->groupId == 5) throw new AException($resp->messages[0]->status->description, 422);
    }


    private function appendPrefix(string $number){
        if (!$number) return '';
        $pre = '234';
        if($number[0] == 0) {
            return $pre . substr($number, 1);
        }elseif (substr($number, 0, 3) == $pre){
            return $number;
        }
        return $pre . $number;
    }
}
