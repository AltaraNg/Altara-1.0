<?php


namespace App\Repositories;


use App\ContactCustomer;
use App\CustomerStage;
use Carbon\Carbon;

class ContactCustomerRepository extends Repository
{

    public function model()
    {
        return ContactCustomer::class;
    }

    public function query($filter)
    {
        return $this->model::filter($filter);
    }
    public function getInactive($month, $filter){
        $now = Carbon::now();

        return $this->model::where('customer_stage_id','!=', CustomerStage::where('name', '=',CustomerStage::PURCHASED)->first()->id)
        ->whereMonth('created_at', '<=',  $now->subMonths(intval($month)))->filter($filter);
    }
    public  function getByID ($id) {
        return $this->model::where('id', $id)->first();
    }

    public function getByRegId(string $reg_id){
        return $this->model::where('reg_id', $reg_id)->first();
    }
}
