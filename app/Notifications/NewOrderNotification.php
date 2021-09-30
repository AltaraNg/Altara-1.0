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
use App\Helper\Helper;

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
        //Attaching required parameters from amortization to data to send sms to customer
        $this->data["next_payment_date"] = $data->amortization[0]->expected_payment_date;
        $this->data['expected_amount'] = $data->amortization[0]->expected_amount;
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
        $replacementKeys = Helper::generateReplacementKeys(array_keys($this->data));
        $replacementValues    = array_values($this->data);
        $message = preg_replace($replacementKeys, $replacementValues, Constants::SUCCESSFUL_ORDER);
        return $message;
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
