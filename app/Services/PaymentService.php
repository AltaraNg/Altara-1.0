<?php

namespace App\Services;

use App\Helper\Helper;
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
            ['branch_id' => $model->branch_id, 'payment_method_id' =>$data['payment_method_id'], 'date' => Carbon::today()],
            ['reconcile_number' => Helper::generateTansactionNumber('RE')]
        );

        $payment = $model->payments()->create(array_merge($data, [
            'payment_number' => Helper::generateTansactionNumber('PM'),
            'user_id' => $model->owner_id,
            'branch_id' => $model->branch_id,
            'payment_reconcile_id' => $trans->id,
        ]));

        $trans->total = 0;
        $trans->update();

        return $payment;
    }
}
