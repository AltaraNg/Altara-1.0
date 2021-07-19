<?php

namespace App\Notifications;

use App\Channels\SmsChannel;
use App\Helper\Constants;
use App\NewOrder;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Mail\NewOrder as Mailable;

class NewOrderNotification extends Notification
{
    use Queueable;

    /**
     * @var $data
     */
    private $data;

    /**
     * Create a new notification instance.
     *
     * @param NewOrder $data
     */
    public function __construct(NewOrder $data)
    {
        $this->data = $data->toArray();
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', SmsChannel::class];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return Mailable|MailMessage
     */
    public function toMail($notifiable)
    {
        return (new Mailable($this->data))
            ->to($notifiable->email)
            ->cc(config('app.admin_email'));
    }

    /**
     * Get the voice representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return string
     */
    public function toSms($notifiable)
    {
        //get all array_keys and values of the this->data to be replaced
        $find       = array_keys($this->data);
        $replace    = array_values($this->data);
        //construct a new array to construct regex to search for when replacing
        $myNewArray =  array_map(function ($value) {
            return '/\[' . $value . '\]/';
        }, $find);
        $new_string = preg_replace($myNewArray, $replace, Constants::SUCCESSFUL_ORDER);
        return $new_string;
        // return strtr(Constants::SUCCESSFUL_ORDER, $this->data);
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
