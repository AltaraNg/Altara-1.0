<?php

namespace App\Notifications;

use App\Mail\ProductTransfer as Mailable;
use App\Models\Branch;
use App\Notifications\Models\ProductTransferModel;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class ProductTransferNotification extends Notification
{
    use Queueable;
    /**
     * @var $data
     */
    private $data;

    /**
     * Create a new notification instance.
     *
     * @param ProductTransferModel $data
     */
    public function __construct(ProductTransferModel $data)
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
        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return Mailable
     */
    public function toMail($notifiable)
    {
        return (new Mailable($this->data))
            ->to($notifiable->email)
            ->cc(Branch::find($this->data['from'])->email)
            ->bcc(config('app.admin_email'));
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
