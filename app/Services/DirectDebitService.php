<?php


namespace App\Services;


use App\Amortization;
use App\BusinessType;
use App\Events\RepaymentEvent;
use App\OrderStatus;
use Carbon\Carbon;
use Illuminate\Contracts\Container\BindingResolutionException;

class DirectDebitService
{
    /**
     * @var MailService
     */
    private $mailService;
    /**
     * @var PaystackService
     */
    private $paystackService;

    /**
     * DirectDebitService constructor.
     * @param MailService $mailService
     * @param PaystackService $paystackService
     */
    public function __construct(MailService $mailService, PaystackService $paystackService)
    {
        $this->mailService = $mailService;
        $this->paystackService = $paystackService;
    }

    private function fetchOrders()
    {
        //get list of due payments
        $data = Amortization::where('actual_payment_date', null)
            ->whereDate('expected_payment_date', '<=' ,Carbon::now())
            ->whereHas('new_orders', function ($q){
                $q->where('status_id', OrderStatus::where('name', OrderStatus::ACTIVE)->first()->id)
                    ->where('business_type_id', BusinessType::where('name', BusinessType::ALTARA_PAY_PRODUCT)->first()->id)
                    ->orWhere('business_type_id', BusinessType::where('name', BusinessType::ALTARA_PAY_CASH_LOAN)->first()->id);
            });

        return $data->get();
    }

    public function handle()
    {
        $items = $this->fetchOrders();

        $res = array();
        if (empty($items)) {
            return 'No Customers are available';
        }
        foreach ($items as $item) {
            $response = $this->paystackService->charge($item);

            # code...
            $item = [
                'customer_id' => $item->new_orders->customer_id,
                'customer_name' => $item->new_orders->customer->full_name,
                'order_id' => $item->new_orders->order_number,
                'amount' => $item->expected_amount,
            ];

            if($response->status) {
                $item->new_orders['amount'] = $item->expected_amount;
                event(new RepaymentEvent($item->new_orders));
                $res[] = array_merge($item, [
                    'status' => 'success',
                    'statusMessage' => 'Approved'
                ]);
            }else {
                $res[] = array_merge($item, [
                    'status' => 'failed',
                    'statusMessage' => $response->message
                ]);
            }
        }

        # send report mail
//        try {
//            $this->mailService->sendReportAsMail('Direct Debit Report', $res,
//                config('app.operations_email'), 'Direct Debit Report',
//                'DirectDebit', 'Direct Debit Report ' . Carbon::now()->toDateString());
//        } catch (BindingResolutionException $e) {
//        }

        return $res;

    }
}
