<?php

use App\Customer;
use App\Order;
use App\Purchase;
use App\RepaymentFormal;
use App\RepaymentInformal;
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
        $data = Purchase::orderBy('order_date', 'DESC')->take(300)->get();
        foreach ($data as $order) {
            $user = User::where('staff_id', $order->sales_agent_id)->get();
            $customer = Customer::where('id', $order->customer_id)->get();
            $newDate = $order->order_date;
            if (count($user) > 0 && count($customer) > 0) {
                $storedOrder = Order::create([
                    'id' => $order->order_id,
                    'order_date' => $newDate,
                    'sales_category_id' => rand(1, 2),
                    'customer_id' => $order->customer_id,
                    'product_sku' => $order->product_sku,
                    'product_price' => $order->product_price,
                    'down_payment' => $this->fortyPercent($order->product_price),
                    'product_qty' => $order->product_qty,
                    'sales_type_id' => rand(1, 5),
                    'discount_id' => rand(1, 6),
                    'repayment_amount' => $order->repayment,
                    'sales_agent_id' => $order->sales_agent_id,
                    'payment_method_id' => rand(1, 3),
                    'deposit_to' => rand(1, 18),
                    'return' => false,
                ]);

                if ($customer[0]->employment_status == 'formal') {
                    RepaymentFormal::create([
                        'repayment_id' => $storedOrder->id,
                        'date_of_last_payment' => $newDate,
                        'date_of_next_payment' => date('Y-m-d', strtotime($newDate . ' + 28 days')),
                        '1st_date' => $newDate,
                        '1st_pay' => $storedOrder->repayment_amount,
                        '1st_payment_method' => rand(1, 3),
                        '1st_payment_bank' => rand(1, 18),
                    ]);
                } else {
                    RepaymentInformal::create([
                        'repayment_id' => $storedOrder->id,
                        'date_of_last_payment' => $newDate,
                        'date_of_next_payment' => date('Y-m-d', strtotime($newDate . ' + 14 days')),
                        '1st_date' => $newDate,
                        '1st_pay' => $storedOrder->repayment_amount,
                        '1st_payment_method' => rand(1, 3),
                        '1st_payment_bank' => rand(1, 18),
                    ]);
                }
            }
        }
    }

    public function fortyPercent($totalPrice)
    {
        return (double)(($totalPrice / 100) * 40);
    }
}
