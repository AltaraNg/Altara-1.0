<?php


namespace App\Services;

use App\Events\MobileAppActivityEvent;
use App\Events\RepaymentEvent;
use App\Exports\DirectDebitExport;
use App\Models\Amortization;
use App\Models\MobileAppActivity;
use App\Models\NewOrder;
use App\Models\OrderStatus;
use App\Models\OrderType;
use App\Models\PaymentGateway;
use App\Models\PaymentMethod;
use App\Models\PaymentType;
use Carbon\Carbon;
use Exception;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log as FacadesLog;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;

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
     * @var RepaymentEventService
     */
    private $repaymentEventService;
    /**
     * DirectDebitService constructor.
     * @param MailService $mailService
     * @param PaystackService $paystackService
     * @param RepaymentEventService $repaymentEventService
     */
    public function __construct(MailService $mailService, PaystackService $paystackService, RepaymentEventService $repaymentEventService)
    {
        $this->mailService = $mailService;
        $this->paystackService = $paystackService;
        $this->repaymentEventService = $repaymentEventService;
    }

    private function fetchOrders($sortOrder)
    {
        //get list of due payments
        $data = Amortization::whereDate('expected_payment_date', '<=', Carbon::now())
            // ->whereColumn('actual_amount', '<', 'expected_amount')
            ->whereRaw('expected_amount - actual_amount > 100')
            ->whereHas('new_orders', function ($q) {
                $q->where('status_id', OrderStatus::where('name', OrderStatus::ACTIVE)->first()->id)
                    ->where('order_type_id', OrderType::where('name', OrderType::ALTARA_PAY)->first()->id)
                    ->where('payment_gateway_id', PaymentGateway::where('name', PaymentGateway::PAYSTACK)->first()->id);
            })->orderBy('id', $sortOrder);
        return $data->get();
    }

    public function handle($sortOrder = "DESC")
    {
        $items = $this->fetchOrders($sortOrder);
        $res = array();
        if (empty($items)) {
            return 'No Customers are available';
        }
        $skip = 0;
        $errorMessage = "";
        foreach ($items as $item) {
            if ($skip == $item->new_order_id) {
                FacadesLog::debug('Skipping Order ID ' . $item->new_order_id . ' because of ' . $errorMessage);
                continue;
            }
            $amountToDeduct = $item->expected_amount - $item->actual_amount;
            $response = $this->paystackService->charge($item);
            # code...
            $data = [
                'customer_id' => $item->new_orders->customer_id,
                'customer_name' => $item->new_orders->customer->full_name,
                'branch' => $item->new_orders->branch->name ?? "",
                'order_id' => $item->new_orders->order_number,
                'order_date' => $item->new_orders->order_date,
                'business_type' => $item->new_orders->businessType->name ?? null,
                'amount' => $amountToDeduct,
            ];
            $data_for_log =  [
                "amount" => $amountToDeduct,
                "customer_id" => $item->new_orders->customer_id,
                "payment_type_id" => PaymentType::where('type', PaymentType::REPAYMENTS)->first()->id,
                "payment_method_id" => PaymentMethod::where('name', 'direct-debit')->first()->id,
                "bank_id" => 6 //hardcoded to fcmb
            ];
            if (isset($response->data) && isset($response->data->status) && $response->data->status === "success") {
                $item->new_orders['amount'] = $amountToDeduct;
                $item->new_orders['is_dd'] = true;
                $resp = PaymentService::logPayment($data_for_log, $item->new_orders);
                event(new RepaymentEvent($item->new_orders, $item));
                if ($item->new_orders->financed_by == NewOrder::ALTARA_LOAN_APP) {
                    event(
                        new MobileAppActivityEvent(
                            MobileAppActivity::query()->where('slug', 'make_repayment')->first(),
                            $item->new_orders->customer,
                            [
                                'order' => $item->new_order,
                                'data_for_log' => $data_for_log,
                                'paystack_response' => $response
                            ]
                        )
                    );
                }

                $res[] = array_merge($data, [
                    'bank' => $response->data->authorization->bank ?? '',
                    'status' => 'success',
                    'statusMessage' => 'Approved'
                ]);
            } else {
                $skip = $item->new_order_id;
                $errorMessage =  (isset($response->data) &&  isset($response->data->gateway_response)) ? $response->data->gateway_response : ($response ? $response->message : 'Something went wrong');
                if (str_contains($errorMessage, "Charge attempt")) {
                    continue;
                }
                $res[] = array_merge($data, [
                    'bank' => $response->data->authorization->bank ?? '',
                    'status' => 'failed',
                    'statusMessage' => $errorMessage
                ]);
            }
        }

        try {
            $json_array = array_map(function ($item) {
                return array_merge($item, ['created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
            }, $res);
            foreach ($json_array as $record) {
                $uniqueColumn = $record['order_id'];
                DB::table('dd_responses')->updateOrInsert(['order_id' => $uniqueColumn], $record);
            }
        } catch (\Throwable $e) {
            FacadesLog::debug($e->getMessage());
        }

        # send report mail
        $this->sendDirectDebitReport($res);
        return $res;
    }

    public function handleCustomDebit(NewOrder $new_order, $amount, $account)
    {
        $res = null;
        $response = $this->paystackService->chargeCustomer($new_order->amortization[0], $amount, $account);
        # code...
        $data =  [
            'customer_id' => $new_order->customer_id,
            'customer_name' => $new_order->customer->full_name,
            'order_id' => $new_order->order_number,
            'amount' => $amount,
        ];
        $data_for_log = [
            "amount" => $amount,
            "customer_id" => $new_order->customer_id,
            "payment_type_id" => PaymentType::where('type', PaymentType::REPAYMENTS)->first()->id,
            "payment_method_id" => PaymentMethod::where('name', 'direct-debit')->first()->id,
            "bank_id" => 6 //hardcoded to fcmb
        ];
        if (isset($response->data) && isset($response->data->status) && $response->data->status === "success") {
            PaymentService::logPayment($data_for_log, $new_order);
            $amortizations = collect($new_order->amortization);
            $last_key = $amortizations->keys()->last();
            foreach ($amortizations as $key => $item) {
                $sendNotification = false;
                if ($key != $last_key && $amount != 0) {
                    $amountToDeduct = $item->expected_amount - $item->actual_amount;
                    if ($amount >= $amountToDeduct && $item->actual_amount < $item->expected_amount) {

                        $item->new_orders['amount'] = $item->actual_amount + $amountToDeduct;
                        $amount = $amount - $amountToDeduct;
                        $sendNotification = true;
                    } else if ($amount < $amountToDeduct && $amount > 0 && $item->actual_amount < $item->expected_amount) {
                        $item->new_orders['amount'] = $item->actual_amount + $amount;
                        $amount = 0;
                        $sendNotification = true;
                    } else {
                        $sendNotification = false;
                    }
                } else {
                    if ($amount > 0) {
                        $item->new_orders['amount'] = $item->actual_amount + $amount;
                        $amount = 0;
                        $sendNotification = true;
                    } else {
                        $sendNotification = false;
                    }
                }
                if ($sendNotification == true && $item->new_orders['amount'] > 0) {
                    $item->update([
                        'actual_payment_date' => Carbon::now(),
                        'actual_amount' => $item->new_orders['amount'],
                        'user_id' => auth()->user()->id ?? 1
                    ]);
                    $this->repaymentEventService->repaymentListenerAction($item->new_orders);
                    $this->repaymentEventService->bank54RepaymentListenerAction($item->new_orders);
                }
            }
            $res = array_merge($data, [
                'status' => 'success',
                'statusMessage' => 'Approved'
            ]);
        } else {
            $res = array_merge($data, [
                'status' => 'failed',
                'statusMessage' => (isset($response->data) &&  isset($response->data->gateway_response)) ? $response->data->gateway_response : ($response ? $response->message : 'Something went wrong')
            ]);
        }
        $this->sendDirectDebitReport([$res]);
        return $res;
    }

    private function sendDirectDebitReport(array $response)
    {
        try {
            $filename = 'direct-debit-report-' . \Carbon\Carbon::now()->format('Y-m-d_H:i:s');

            $export = new DirectDebitExport($response);

            Excel::store($export, 'dd/' . $filename . '.xlsx', 's3');

            $url = Storage::disk('s3')->url('dd/' . $filename . '.xlsx');
            FacadesLog::debug('Skipping ' . $url);

            $this->mailService->sendReportAsMail(
                'Direct Debit Report',
                [$url],
                [config('app.operations_email'), config('app.admin_email')],
                'Direct Debit Report',
                'DirectDebitLink',
                'Direct Debit Report ' . Carbon::now()->toDateString()
            );
        } catch (BindingResolutionException $e) {
            FacadesLog::error($e->getMessage());
        } catch (Exception $e) {
            FacadesLog::error($e->getMessage());
        }
    }
}
