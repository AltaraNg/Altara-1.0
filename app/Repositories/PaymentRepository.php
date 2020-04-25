<?php

namespace App\Repositories;

use App\Payment;

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

    public function getAll($filter)
    {
        return $this->model::filter($filter)->paginate();
    }

    public function update($model, $data) {
        $model->update($data);
        $model->paymentReconcile->setTotalAttribute();

        $model->paymentReconcile->update();

        if(request()->has('comment')){
            $model->comment()->updateOrCreate(['commentable_id' => $model->id],['comment' => request('comment')]);
        }
        return $model;
    }
}
