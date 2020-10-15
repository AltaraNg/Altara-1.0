<?php


namespace App\Repositories;

use App\Amortization;
use Carbon\Carbon;

class AmortizationRepository extends Repository
{

    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return Amortization::class;
    }

    public function getAll($filter)
    {
        return $this->model::orderBy('created_at', 'desc')->filter($filter)->paginate();
    }

    public function getAmortizationByDays($days)
    {
        $today = Carbon::now();
        $customers = $this->model()::join('new_orders', 'amortizations.new_order_id', '=', 'new_orders.id')
        ->join('customers', 'new_orders.customer_id', '=', 'customers.id')
        ->select('customer_id')
        ->distinct()
            ->where(function ($q) use ($today, $days) {
                $q->where('expected_payment_date', '<=', $today->addDays($days))
                    ->where('actual_payment_date', null);
            })->get();

        return $customers;
    }
}
