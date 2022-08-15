<?php

namespace App\Console\Commands;

use App\BusinessType;
use App\NewOrder;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SendLateFeeWarningMessageCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:late-fee-message-warning';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command is used for send messages to customers that there order is about to attract late fee';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    private  $businessType = [BusinessType::ALTARA_CREDIT_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_CASH_LOAN_PRODUCT_SLUG, BusinessType::ALTARA_PAY_STARTER_CASH_LOAN_SLUG, BusinessType::ALTARA_PAY_STARTER_CASH_NINE_MONTHS, BusinessType::ALTARA_PAY_SUPER_LOAN_RENEWAL, BusinessType::ALTARA_PAY_SUPER_LOAN_NEW, BusinessType::ALTARA_PAY_CASH_LOAN_NO_COLLATERAL, BusinessType::ALTARA_PAY_STARTER_CASH_LOAN_NO_COLLATERAL, BusinessType::ALTARA_PAY_RENTALS_SLUG];
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        // where('order_number', 'AT62EA231E04')->orWhere('order_number', 'AT62EA22B634')
        $orders = NewOrder::whereHas('businessType', function ($q) {
            $q->whereIn('slug', $this->businessType);
        })->with('customer:id,first_name,last_name,telephone', 'amortization')->get();
        $orders->each(function ($order) {
            $amortization = $order->amortization;
            // dd($order->order_number);
            $lastAmortization = (object) $amortization[$amortization->count() - 1];
            if ($amortization && isset($lastAmortization->expected_payment_date)) {

                $daysToLate = Carbon::now()->endOfDay()->subMonth()->diffInDays(Carbon::parse($lastAmortization->expected_payment_date), false);
                $this->info($daysToLate);
                if ($daysToLate < 0) {
                    $this->info('-------------------------------------------------------------------');
                    $this->info('Order with ID: ' . $order->id . ' should have been charged for late fee ' . abs($daysToLate) . ' days ago');
                    $this->info('Expected Payment Date: ' . $lastAmortization->expected_payment_date);
                    $this->info('Date Used: ' . Carbon::now()->addMonth());
                    $this->info('-------------------------------------------------------------------');
                }

                if ($daysToLate  == 11) {
                    $this->info($order->id . ' is ' . $daysToLate . ' days away from been charged for late fee');
                }
                if ($daysToLate == 12) {
                    $this->info($order->id . ' is 15 days away from been charged for late fee');
                }
                if ($daysToLate == 7) {
                    $this->info($order->id . ' is 7 days away from been charged for late fee');
                }
                if ($daysToLate == 3) {
                    $this->info($order->id . ' is 3 days away from been charged for late fee');
                }
                if ($daysToLate == 1) {
                    $this->info($order->id . ' is 1 days away from been charged for late fee');
                }
            }
        });
    }
}
