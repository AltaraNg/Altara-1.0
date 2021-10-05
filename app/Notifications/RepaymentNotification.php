<?php

namespace App\Notifications;

use App\Channels\SmsChannel;
use App\Helper\Constants;
use App\Helper\Helper;
use App\NewOrder;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Mail\Repayment as Mailable;

class RepaymentNotification extends Notification
{
    use Queueable;

    /**
     * @var $data
     */
    private $data;
    private $amortization;

    /**
     * Create a new notification instance.
     *
     * @param NewOrder $data
     */
    public function __construct(NewOrder $data)
    {

        $this->amortization = $data->amortization();
        $this->data = $data->toArray();
        $downPayment = $this->data['down_payment'];
        //Attaching required parameters from amortization to data to send sms to customer
        $this->data['total_no_of_repayment_expected'] = $data->amortization->count();
        $totalOfRepaymentMade = $data->amortization->where('actual_payment_date', '!=', null)->sum('actual_amount')  + $downPayment;
        $this->data['total_of_repayment_made'] =  $totalOfRepaymentMade;
        $this->data['total_of_repayment_not_made'] = abs($data->amortization->where('actual_payment_date', '!=', null)->sum('actual_amount')  - $data->amortization->sum('expected_amount'));
        $this->data['no_of_repayment_made'] = $data->amortization->where('actual_payment_date', '!=', null)->count();
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
     * @return Mailable
     */
    public function toMail($notifiable)
    {
        return (new Mailable($this->data, $this->amortization))
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
        $message = preg_replace($replacementKeys, $replacementValues, Constants::SUCCESSFUL_REPAYMENT);
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
