<?php

namespace App\Notifications;

use App\Models\MissMatchedPayments;
use App\Models\NewOrder;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;


class AccountNumberVerificationFailedNotification extends Notification
{
    use Queueable;

    public $order;
    public $missMatchedPayment;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(NewOrder $order, MissMatchedPayments $missMatchedPayment)
    {
        $this->order = $order;
        $this->missMatchedPayment = $missMatchedPayment;

    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->view('emails.miss-matched-payment', [
                'customer' => $this->order->customer,
                'order' => $this->order,
                'missMatchedData' => $this->missMatchedPayment
            ]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
