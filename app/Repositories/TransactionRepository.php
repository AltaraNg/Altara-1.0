<?php

namespace App\Repositories;

use App\Helper\Helper;
use App\Transaction;
use App\TransactionList;
use Carbon\Carbon;

class TransactionRepository extends Repository
{

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return Transaction::class;
    }

    public function storeOrCreate(array $data)
    {
        $trans = Transaction::firstOrCreate(
            ['branch_id' => auth()->user()->branch_id, 'date' => Carbon::today()],
            ['transaction_id' => Helper::generateTansactionNumber('TR')]
        );
        $resp = $trans->transactionList()->create(array_merge($data, [
            'payment_id' => Helper::generateTansactionNumber('PM'),
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
        return $this->model::with('transactionList')->filter($filter)->paginate();
    }
}
