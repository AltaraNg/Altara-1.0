<?php

namespace App\Services;

use App\DownPaymentRate;
use App\Exceptions\AException;
use App\Helper\Helper;
use App\NewOrder;
use App\PriceCalculator;
use App\StoreProduct;
use Illuminate\Support\Str;

/**
 *
 * @author Adeniyi
 */
class AmmortizationService
{
    public function generatePreview($data)
    {
        $order = new NewOrder($data);
        try {
            $plan = app()->make('App\Amortization\\' .Str::studly($order->repaymentCycle->name), ['order' => $order])->preview();
        } catch (\Exception $e) {
            throw new AException($e->getMessage(), $e->getCode());
        }
        return $plan;
    }

    public function recommend($data){
        // * Get all necessary parameters
       $salary = (int) $data['salary'];
       $total_price = (int) $data['total_price'];
       $initial_plan = (int) $data['plan_id'];
       $duration = (int) $data['duration'];
       $cycle = (int) $data['cycle'];
       $business_type = (int) $data['business_type'];


        $downpayments = DownPaymentRate::all()->toArray();

        usort($downpayments, function($a, $b){
            return strcmp($a['percent'], $b['percent']);
        }); //* sort by percent value

        $key=array_search($initial_plan, array_column(json_decode(json_encode($downpayments),TRUE), 'id'));  //* get starting point for plan loop
        $ans = '';
        for( $i = $key; $i < count($downpayments); $i++){
            $data = [
                "repayment_dur" => $duration,
                "repayment_cycle" => $cycle,
                "percent" => $downpayments[$i]['percent'],
                "plus" => $downpayments[$i]['plus']
            ];
            $params = PriceCalculator::where([
                ['repayment_duration_id', '=', $duration],
                ['down_payment_rate_id', '=', $downpayments[$i]['id']],
                ['business_type_id', '=', $business_type]
            ])->first();

            $calculator_data = Helper::calculator($total_price,(object)$data, $params);
            if($this->getAllowance($salary) >= $calculator_data['repayment'])
            {
                $ans = "Suitable plan is ".$downpayments[$i]['name'];
                return $ans;
            }
            else{
                $ans = "There is no suitable plan";
            }

        }

        return $ans;

    }

    public function recommendInformal($data){
        //* Get all relevant parameters
        $initial_plan = (int) $data['plan_id'];
        $duration = (int) $data['duration'];
        $cycle = (int) $data['cycle'];
        $business_type = (int) $data['business_type'];
       $total_price = (int) $data['total_price'];
       $months = [$data['month1'], $data['month2'], $data['month3']];

       $downpayments = DownPaymentRate::all()->toArray();

       usort($downpayments, function($a, $b){
           return strcmp($a['percent'], $b['percent']);
       }); //* sort by percent value

       $key=array_search($initial_plan, array_column(json_decode(json_encode($downpayments),TRUE), 'id'));  //* get starting point for plan loop
       $ans = '';

        //* Do credibility check
        for($i = $key ; $i < count($downpayments) ; $i++){

            $data = [
                "repayment_dur" => $duration,
                "repayment_cycle" => $cycle,
                "percent" => $downpayments[$i]['percent'],
                "plus" => $downpayments[$i]['plus']
            ];
            $params = PriceCalculator::where([
                ['repayment_duration_id', '=', $duration],
                ['down_payment_rate_id', '=', $downpayments[$i]['id']],
                ['business_type_id', '=', $business_type]
            ])->first();
            $calculator_data = Helper::calculator($total_price,(object)$data, $params);
            $cred_month = 0;
            foreach($months as $month){
                if($this->confirmMonth($month, $calculator_data['repayment']) == false){
                    break;
                }else{
                    $cred_month++;
                }
            }
            if($cred_month == 3){
                $ans = "Suitable plan is ".$downpayments[$i]['name'];
                return $ans;
            }
            else{
               $ans = "There is no suitable plan";
            }
        }
        return $ans;

    }

    public function getAllowance($salary){
        return (float)$salary / 4;
    }

    public function confirmMonth($balances, $repayment){
        $affirm = 0;
        foreach($balances as $balance){
            if($balance >= $repayment){
                $affirm++;
            }
        }
        return $affirm >= 2;
    }
}
