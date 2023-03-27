<?php

namespace App\Notifications;

use App\Channels\SmsChannel;
use App\Helper\Constants;
use App\NewOrder;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Mail\NewOrder as NewOrderMailable;
use App\Helper\Helper;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

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
        $channels = ['database'];
        if (env('SEND_ORDER_SMS')) {
            array_push($channels, SmsChannel::class);
        }
        if (env('SEND_ORDER_MAIL')) {
            array_push($channels, 'mail');
        }
        return $channels;
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return Mailable|MailMessage
     */
    public function toMail($notifiable)
    {
        $isInProduction = App::environment() === 'production';
        $email =   $notifiable->email;
        if (Auth::check() && !$isInProduction) {
            $email = auth()->user()->email;
        }
        return (new NewOrderMailable($this->data))
            ->to($email)
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
