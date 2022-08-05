<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class LateFeeDebit extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @var
     */
    public $data;
    /**
     * @var
     */
    public $amortization;
    /**
     * @var
     */
    public $completedRepayment;

    /**
     * Create a new message instance.
     *
     * @param $data
     * @param $amortization
     */
    public function __construct($data, $amortization)
    {
        $this->data = $data;
        $this->amortization = clone $amortization;
        $this->completedRepayment = $amortization->where('actual_payment_date', '!=', null)->count();
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Notification of Repayment on Order ' . $this->data['order_number'])->view('emails.late-fee-debit');
    }
}
