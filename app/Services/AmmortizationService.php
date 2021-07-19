<?php

namespace App\Services;

use App\DownPaymentRate;
use App\Exceptions\AException;
use App\NewOrder;
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
       $salary = (int) $data['salary'];
       $downpayment = (int) $data['down_payment'];
       $total_price = (int) $data['total_price'];

       $allowance = $this->getAllowance($salary);
       $plan = $downpayment / $total_price * 100;
       $repayment = ($total_price - $downpayment)/6;
       if ($allowance > $repayment){
           $ans = $plan."% is ok";
       }
       else{

           $res = $this->getSuitablePlan((int)$plan, $total_price, $allowance);
           if($res == 'none'){
               $ans = "There is no suitable plan";
           }
           else{
           $ans = "the recommended plan is ". $res. "%";
        }
       }



        return $ans;
    }

    public function recommendInformal($data){
        //* Get all relevant parameters
        $downpayment = (int) $data['down_payment'];
       $total_price = (int) $data['total_price'];
       $months = [$data['month1'], $data['month2'], $data['month3']];

       //* Get current plan
       $plan = $downpayment / $total_price * 100;

       $downpayments = array_values(DownPaymentRate::$downPayments);
        $key = array_search($plan, $downpayments);
        $ans = '';

        //* Do credibility check
        for($i = $key ; $i < count($downpayments) ; $i++){

            $repayment = ($total_price - ($downpayments[$i] / 100 * $total_price)) / 6;
            $cred_month = 0;
            foreach($months as $month){
                if($this->confirmMonth($month, $repayment) == false){
                    break;
                }else{
                    $cred_month++;
                }
            }
            if($cred_month == 3){
                $ans = "the recommended plan is ". $downpayments[$i]. "%";
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
    public function getSuitablePlan($initial_plan, $total_price, $allowance){
        $ans = '';
        $downpayments = array_values(DownPaymentRate::$downPayments);
        $key = array_search($initial_plan, $downpayments);
        for($i = $key ; $i < count($downpayments) ; $i++){
            $downpayment = ($downpayments[$i] / 100) * $total_price;

            $repayment = ($total_price - $downpayment) / 6;
            if($repayment > $allowance ){
                $ans = 'none';
            }
            else{
                $ans = $downpayments[$i];
                break;
            }
        }
        return $ans;

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
