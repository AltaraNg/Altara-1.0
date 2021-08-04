<?php

namespace App\Notifications;

use App\Channels\SmsChannel;
use App\Notifications\Models\SmsReminderModel;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class SmsReminder extends Notification
{
    use Queueable;
    public $data;

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
        return [SmsChannel::class, 'database'];
    }

    /**
     * Get the voice representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return string
     */
    public function toSms($notifiable)
    {
        return $this->data['message'];
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
