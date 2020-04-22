<?php

namespace App\Repositories;

use App\PaymentList;
use Illuminate\Http\Request;

class PaymentListRepository extends Repository
{

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return PaymentList::class;
    }

    public function getAll($filter)
    {
        return $this->model::filter($filter)->paginate();
    }

    public function update($model, $data) {
        $model->update($data);
        if(request()->has('comment')){
            $model->comment()->updateOrCreate(['comment' => request('comment')]);
        }
        return $model;
    }
}
