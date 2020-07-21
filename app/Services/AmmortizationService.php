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
    public function generatePreview($data)
    {
        $product_price = StoreProduct::where('product_id', $data['product_id'])->first()->pc_pprice;
        $order = new NewOrder(array_merge($data, [
            'product_price' => $product_price,
            'repayment' => $product_price - $data['down_payment']
        ]));

        try {
            $plan = app()->make('App\Amortization\\' .Str::studly($order->repaymentCycle->name), ['order' => $order])->preview();
        } catch (\Exception $e) {
            throw new AException($e->getMessage(), $e->getCode());
        }
        return $plan;
    }
}
