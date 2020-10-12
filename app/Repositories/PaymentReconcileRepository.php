<?php

namespace App\Repositories;

use App\PaymentReconcile;
use App\Repayment;
use App\Services\PaymentService;
use Illuminate\Support\Str;
use App\Events\RepaymentEvent;
use App\PaymentType;

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
        $model = app('App\\' . Str::studly($data['model']))->findOrFail($data['model_id']);

        unset($data['model_id']);
        unset($data['model']);

        $resp = PaymentService::logPayment($data, $model);

        if(request()->has('comment')){
            $resp->comment()->create(['comment' => request('comment'), 'user_id' => auth()->user()->id]);
        }
        $payment_type = PaymentType::where('id', $data["payment_type_id"])->first();

        if ($payment_type->type == PaymentType::REPAYMENTS) {
            event(new RepaymentEvent($data));
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
