<?php

namespace App\Services;

use App\MissMatchedPayments;
use App\NewOrder;
use App\Notifications\AccountNumberVerificationFailedNotification;
use App\Recommendation;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\App;

class CreditCheckService
{
    const LOANS = [40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000];
    const rate = 11.28;

    public function getLoans($data)
    {
        $temp = [];
        $result = [];
        foreach (self::LOANS as $loan) {
            foreach ($data as $month) {
                $point = $this->getPoints($loan, $month);
                $temp[$loan][] = $point;
            }

            $result[$loan] = min($temp[$loan]) >= 2 ? 'Approved' : 'Rejected';
        }
        return $result;
    }

    public function getPoints($loan, $monthRecord): int
    {
        $repayment = $loan / self::rate;
        $temp = 0;
        foreach ($monthRecord as $record) {
            if ($record >= $repayment) {
                $temp += 1;
            }
        }
        return $temp;
    }

    public static function accountNumberVerification(
        int $customer_id,
        $order_id,
        string $account_number,
        string $account_name,
        string $bank_name,
        string $reference = null
    ) {

        if (!env('USE_MISS_MATCHED_ACCOUNT')) {
            return;
        }
        try {
            $isValid = false;
            $orderQuery = NewOrder::query();
            $order = is_string($order_id) ? $orderQuery->where('order_number', $order_id)->first() : $orderQuery->where('id', $order_id)->first();
            $latestCreditReport = Recommendation::query()->where('customer_id', $customer_id)->where('type', 'credit_report')->latest('created_at')->first();
            if ($latestCreditReport) {
                $data = json_decode($latestCreditReport->input_data);
                if (property_exists($data, 'accountName') && property_exists($data, 'bankName')) {
                    $isValid = $data->accountName == $account_name  && $data->bankName ==  $bank_name;
                }
                if (!$isValid) {
                    // dd($data);
                    //keep a record 
                    $missMatchedPayment =  MissMatchedPayments::create([
                        'reference' => $reference,
                        'customer_id' => $customer_id,
                        'order_id' => $order->id,

                        'actual_account_number' => $account_number,
                        'actual_account_name' => $account_name,
                        'actual_bank_name' => $bank_name,

                        'expected_account_name' => $data->accountName ?? null,
                        'expected_account_number' => $data->accountNo ?? null,
                        'expected_bank_name' => $data->bankName ?? null,

                    ]);
                    //send notification
                    $receiver = config('app.admin_email');
                    if (!App::environment() === 'production') {
                        $receiver = auth()->user()->email;
                    }
                    Notification::route('mail', $receiver)->notify(new AccountNumberVerificationFailedNotification($order, $missMatchedPayment));
                } else {
                    //delete record 
                    MissMatchedPayments::query()->where('customer_id', $customer_id)->delete();
                }
            }
        } catch (\Throwable $th) {
            //throw $th;
            Log::error($th);
        }
    }
}
