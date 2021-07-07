<?php

namespace App\Services;

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
    private $plans = [20, 40, 60, 80];
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
       $salary = (float) $data['salary'];
       $downpayment = (float) $data['down_payment'];
       $total_price = (float) $data['total_price'];

       $allowance = $this->getAllowance($salary);
       $plan = $downpayment / $total_price * 100;
       $repayment = ($total_price - $downpayment)/6;
       if ($allowance > $repayment){
           $ans = "Plan is ok";
       }
       else{

           $res = $this->getSuitablePlan((int)$plan, $total_price, $allowance);
           if($res == 'none'){
               $ans = "There is no suitable plan";
           }
           else{
           $ans = "the recommended plan is " + $res;
        }
       }



        return $ans;
    }

    public function getAllowance($salary){
        return (float) $salary / 4;
    }
    public function getSuitablePlan($initial_plan, $total_price, $allowance){
        $ans = '';
        for($i = $initial_plan ; $i <= 100 ; $i+=20){
            $downpayment = $i / 100 * $total_price;
            $repayment = ($total_price - $downpayment)/6;
            if($repayment > $allowance ){
                $ans = 'none';
                // $ans = $initial_plan;
            }
            else{
                $ans = $i;
                break;
            }
        }
        return $ans;

    }
}
