<?php


namespace App\Repositories;

use App\CustomerStage;
use App\User;

class UserRepository extends Repository
{


    public function model()
    {
        return User::class;
    }

    public function getAll($filter)
    {
        $query = $this->model::where('portal_access', 1)->latest();
        if (request('stats') == true){

            return $query->withCount(['contact_customers as total',
            'contact_customers as registered' => function($q){
                $q->where('customer_stage_id', CustomerStage::where('name', CustomerStage::REGISTERED)->first()->id);
            },
            'contact_customers as purchased' => function($q){
                $q->where('customer_stage_id', CustomerStage::where('name', CustomerStage::PURCHASED)->first()->id);
            },
            'contact_customers as affidavit' => function($q){
                $q->where('customer_stage_id', CustomerStage::where('name', CustomerStage::AFFIDAVIT)->first()->id);
            },
            ])->filter($filter)->paginate(100);
        }
        return $query->filter($filter)->paginate(request('limit', 100));
    }
}
