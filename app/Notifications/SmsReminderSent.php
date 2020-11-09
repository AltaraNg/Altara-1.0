<?php

namespace App\Notifications;

use App\Notifications\Models\SmsReminderModel;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class SmsReminderSent extends Notification
{
    use Queueable;
    private $data;

    /**
     * Create a new notification instance.
     *
     * @param SmsReminderModel $smsReminderModel
     */
    public function __construct(SmsReminderModel $smsReminderModel)
    {
        $this->data = $smsReminderModel->toArray();
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database'];
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return $this->data;
    }
}
