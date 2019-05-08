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
            if (count($user) > 0 && count($customer) > 0) {
                $storedOrder = Order::create([
                    'id' => $order->order_id,
                    'order_date' => $order->order_date,
                    'sales_category_id' => rand(1, 2),
                    'customer_id' => $order->customer_id,
                    'product_sku' => $order->product_sku,
                    'product_price' => $order->product_price,
                    'down_payment' => $this->fortyPercent($order->product_price),
                    'product_qty' => $order->product_qty,
                    'sales_type_id' => rand(1, 6),
                    'discount_id' => rand(1, 5),
                    'repayment_amount' => $order->repayment,
                    'sales_agent_id' => $order->sales_agent_id,
                    'payment_method_id' => rand(1, 3),
                    'deposit_to' => rand(1, 18),
                    'return' => false,
                ]);

                if ($customer[0]->employment_status == 'formal') {
                    RepaymentFormal::create([
                        'repayment_id' => $storedOrder->id,

                        'date_of_last_payment' => $storedOrder->order_date,
                        'date_of_next_payment' => date('Y-m-d', strtotime($storedOrder->order_date. ' + 28 days')),

                        '1st_date' => $storedOrder->order_date,
                        '2nd_date' => date('Y-m-d'),
                        '3rd_date' => null,
                        '4th_date' => null,
                        '5th_date' => null,
                        '6th_date' => null,

                        '1st_pay' => $storedOrder->down_payment,
                        '2nd_pay' => null,
                        '3rd_pay' => null,
                        '4th_pay' => null,
                        '5th_pay' => null,
                        '6th_pay' => null,

                        '1st_payment_method' => rand(1,3),
                        '2nd_payment_method' => null,
                        '3rd_payment_method' => null,
                        '4th_payment_method' => null,
                        '5th_payment_method' => null,
                        '6th_payment_method' => null,

                        '1st_payment_bank' => rand(1,18),
                        '2nd_payment_bank' => null,
                        '3rd_payment_bank' => null,
                        '4th_payment_bank' => null,
                        '5th_payment_bank' => null,
                        '6th_payment_bank' => null,
                    ]);
                } else {
                    RepaymentInformal::create([
                        'repayment_id' => $storedOrder->id,

                        'date_of_last_payment' => $storedOrder->order_date,
                        'date_of_next_payment' => date('Y-m-d', strtotime($storedOrder->order_date. ' + 14 days')),

                        '1st_date' => $storedOrder->order_date,
                        '2nd_date' => date('Y-m-d'),
                        '3rd_date' => null,
                        '4th_date' => null,
                        '5th_date' => null,
                        '6th_date' => null,
                        '7th_date' => null,
                        '8th_date' => null,
                        '9th_date' => null,
                        '10th_date' => null,
                        '11th_date' => null,
                        '12th_date' => null,

                        '1st_pay' => $storedOrder->down_payment,
                        '2nd_pay' => null,
                        '3rd_pay' => null,
                        '4th_pay' => null,
                        '5th_pay' => null,
                        '6th_pay' => null,
                        '7th_pay' => null,
                        '8th_pay' => null,
                        '9th_pay' => null,
                        '10th_pay' => null,
                        '11th_pay' => null,
                        '12th_pay' => null,

                        '1st_payment_method' => rand(1,3),
                        '2nd_payment_method' => null,
                        '3rd_payment_method' => null,
                        '4th_payment_method' => null,
                        '5th_payment_method' => null,
                        '6th_payment_method' => null,
                        '7th_payment_method' => null,
                        '8th_payment_method' => null,
                        '9th_payment_method' => null,
                        '10th_payment_method' => null,
                        '11th_payment_method' => null,
                        '12th_payment_method' => null,

                        '1st_payment_bank' => rand(1,18),
                        '2nd_payment_bank' => null,
                        '3rd_payment_bank' => null,
                        '4th_payment_bank' => null,
                        '5th_payment_bank' => null,
                        '6th_payment_bank' => null,
                        '7th_payment_bank' => null,
                        '8th_payment_bank' => null,
                        '9th_payment_bank' => null,
                        '10th_payment_bank' => null,
                        '11th_payment_bank' => null,
                        '12th_payment_bank' => null,
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
