<?php

namespace App\Repositories;

use App\Helper\Helper;
use App\PaymentReconcile;
use Carbon\Carbon;

class PaymentReconcileRepository extends Repository
{

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return PaymentReconcile::class;
    }

    public function storeOrCreate(array $data)
    {
        $trans = PaymentReconcile::firstOrCreate(
            ['branch_id' => auth()->user()->branch_id, 'payment_method_id' => $data['payment_method_id'], 'date' => Carbon::today()],
            ['reconcile_number' => Helper::generateTansactionNumber('RE')]
        );

        $resp = $trans->payments()->create(array_merge($data, [
            'payment_number' => Helper::generateTansactionNumber('PM'),
            'user_id' => auth()->user()->id,
            'branch_id' => auth()->user()->branch_id
        ]));

        $trans->total = 0;
        $trans->update();

        if(request()->has('comment')){
            $resp->comment()->create(['comment' => request('comment'), 'user_id' => auth()->user()->id]);
        }
        return $resp;
    }

    public function getAll($filter)
    {
        return $this->model::orderBy('created_at', 'desc')->filter($filter)->paginate();
    }

    public function update($model, $data) {
        $model->update($data);
        if(request()->has('comment')){
            $model->comment()->updateOrCreate(['commentable_id' => $model->id],['comment' => request('comment'), 'user_id' => auth()->user()->id]);
        }
        return $model;
    }
}
