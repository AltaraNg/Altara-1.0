<?php

namespace App\Repositories;

use App\PaymentReconcile;
use App\Services\PaymentService;
use Illuminate\Support\Str;

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
        $model = app('App\\' . Str::studly($data['model']))->findOrFail($data['id']);

        unset($data['id']);
        unset($data['model']);

        $resp = PaymentService::logPayment($data, $model);

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
