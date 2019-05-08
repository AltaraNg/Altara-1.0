<?php

use App\Customer;
use App\Order;
use App\Purchase;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('orders')->delete();
        $data = Purchase::orderBy('order_date','DESC')->take(300)->get();
        foreach ($data as $order){
            $user = User::where('staff_id',$order->sales_agent_id)->get();
            $customer = Customer::where('id',$order->customer_id)->get();
            if(count($user) > 0 && count($customer) > 0) {
                Order::create([
                    'id' => $order->order_id,
                    'order_date' => $order->order_date,
                    'sales_category_id' => rand(1,2),
                    'customer_id' => $order->customer_id,
                    'product_sku' => $order->product_sku,
                    'product_price' => $order->product_price,
                    'down_payment' => $this->fortyPercent($order->product_price),
                    'product_qty' => $order->product_qty,
                    'sales_type_id' => rand(1,6),
                    'discount_id' => rand(1,5),
                    'repayment_amount' => $order->repayment,
                    'sales_agent_id' => $order->sales_agent_id,
                    'payment_method_id' => rand(1,3),
                    'deposit_to' => rand(1,18),
                    'return' => false,
                ]);
            }
        }
    }

    public function fortyPercent($totalPrice){
        return (double) (($totalPrice/100) * 40);
    }
}
