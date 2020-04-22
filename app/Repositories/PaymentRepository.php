<?php

namespace App\Repositories;

use App\Helper\Helper;
use App\Payment;
use Carbon\Carbon;

class PaymentRepository extends Repository
{

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return Payment::class;
    }

    public function storeOrCreate(array $data)
    {
        $trans = Payment::firstOrCreate(
            ['branch_id' => auth()->user()->branch_id, 'date' => Carbon::today()],
            ['payment_number' => Helper::generateTansactionNumber('TR')]
        );
        $resp = $trans->paymentList()->create(array_merge($data, [
            'pay_id' => Helper::generateTansactionNumber('PM'),
            'user_id' => auth()->user()->id,
            'branch_id' => auth()->user()->branch_id
        ]));
        if(request()->has('comment')){
            $resp->comment()->create(['comment' => request('comment')]);
        }
        return $resp;
    }

    public function getAll($filter)
    {
        return $this->model::with('paymentList')->filter($filter)->paginate();
    }
}
