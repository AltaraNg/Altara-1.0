<?php

namespace App\Services;

use App\Helper\Helper;
use App\LateFee;
use App\PaymentReconcile;
use Carbon\Carbon;


/**
 *
 * @author Adeniyi
 */
class PaymentService
{
    public static function logPayment($data, $model)
    {


        $trans = PaymentReconcile::firstOrCreate(
            ['branch_id' => auth()->user()->branch_id ?? $model->branch_id, 'payment_method_id' => $data['payment_method_id'], 'date' => Carbon::today()],
            ['reconcile_number' => Helper::generateTansactionNumber('RE')]
        );

        $payment = $model->payments()->create(array_merge($data, [
            'payment_number' => Helper::generateTansactionNumber('PM'),
            'user_id' => auth()->user()->id ??  $model->owner_id,
            'branch_id' => auth()->user()->branch_id ?? $model->branch_id,
            'payment_reconcile_id' => $trans->id,
        ]));

        $trans->total = 0;
        $trans->update();

        return $payment;
    }
    public static function logLateFee($data)
    {
        try {
            if (isset($data['id'])) {

                $payment = LateFee::updateOrCreate(['id' => $data['id']], ['date_paid' => $data['date_paid'], 'amount' => $data->amount]);
            } else {
                // dd('i got here');

                $payment = LateFee::updateOrCreate($data);
            }
            $payment = LateFee::updateOrCreate($data);
            if ($payment) {
                return [
                    'status' => 'success'
                ];
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
