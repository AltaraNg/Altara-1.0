<?php

namespace App\Notifications;

use App\Models\Product;
use App\Models\Customer;
use Illuminate\Bus\Queueable;
use App\Models\CreditCheckerVerification;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class CustomerLoanApprovalNotification extends Notification
{
    use Queueable;

    public Product $product;
    public Customer $customer;
    public CreditCheckerVerification $creditCheckVerification;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Customer $customer, Product $product, CreditCheckerVerification $creditCheckerVerification)
    {
        $this->customer = $customer;
        $this->product = $product;
        $this->creditCheckVerification = $creditCheckerVerification;
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
        $product_price =   $this->product->retail_price;
        $downPayment = $this->creditCheckVerification->downPaymentRate->percent / 100 *  $product_price;
        return (new MailMessage)->view('emails.customer-loan-approval', [
            
            'customer_id' => $this->customer->id,
            'application_id' => $this->creditCheckVerification->credit_check_no,
            'customer_name' => $this->customer->first_name . ' ' . $this->customer->last_name,
            'request_date' => $this->creditCheckVerification->created_at->format('Y-m-d'),
            'product_price' => $product_price,
            'down_payment' => $downPayment
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
