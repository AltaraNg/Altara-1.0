<?php

namespace App\Notifications;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ClientEmailVerificationNotification extends Notification
{
    use Queueable;

    public string $verificationLink;
    public Tenant $tenant;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Tenant $tenant, string $verificationLink)
    {
        $this->tenant = $tenant;
        $this->verificationLink = $verificationLink;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param mixed $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Verify Your Email Address for Your New Account')
            ->view('emails.client-email-verification', [
                'verificationLink' => $this->verificationLink,
                'clientName' =>  $this->tenant->name
            ]);
//        return (new MailMessage)
//            ->subject('Verify Your Email Address for Your New Account')
//            ->greeting('Dear, ' . $this->tenant->name)
//            ->line("We are pleased to inform you that your account has been successfully created with Altara Credit Limited")
//            ->line("To complete the setup process, please verify your email address by clicking the link below:")
//            ->action('Verification Link', url($this->verificationLink))
//            ->line("If you did not request this account or if you have any questions, please contact our support team at " . config('app.admin_email'))
//            ->line("Thank you for choosing Altara Credit Limited. We look forward to serving you.")
//            ->salutation('Best Regards, \n Altara Credit Limited');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
