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
                        'date_of_last_payment' => $newDate,
                        'date_of_next_payment' => date('Y-m-d', strtotime($newDate. ' + 28 days')),

                        '1st_date' => $newDate,
                        '2nd_date' => date('Y-m-d', strtotime($newDate. ' + 28 days')),
                        '3rd_date' => date('Y-m-d', strtotime($newDate. ' + 56 days')),
                        '4th_date' => date('Y-m-d', strtotime($newDate. ' + 84 days')),
                        '5th_date' => date('Y-m-d', strtotime($newDate. ' + 112 days')),
                        '6th_date' => date('Y-m-d', strtotime($newDate. ' + 140 days')),

                        '1st_pay' => $storedOrder->down_payment,
                        '2nd_pay' => 00.00,
                        '3rd_pay' => 00.00,
                        '4th_pay' => 00.00,
                        '5th_pay' => 00.00,
                        '6th_pay' => 00.00,

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

                        'date_of_last_payment' => $newDate,
                        'date_of_next_payment' => date('Y-m-d', strtotime($newDate. ' + 14 days')),

                        '1st_date' => $newDate,
                        '2nd_date' => date('Y-m-d', strtotime($newDate. ' + 14 days')),
                        '3rd_date' => date('Y-m-d', strtotime($newDate. ' + 28 days')),
                        '4th_date' => date('Y-m-d', strtotime($newDate. ' + 42 days')),
                        '5th_date' => date('Y-m-d', strtotime($newDate. ' + 56 days')),
                        '6th_date' => date('Y-m-d', strtotime($newDate. ' + 70 days')),
                        '7th_date' => date('Y-m-d', strtotime($newDate. ' + 84 days')),
                        '8th_date' => date('Y-m-d', strtotime($newDate. ' + 98 days')),
                        '9th_date' => date('Y-m-d', strtotime($newDate. ' + 112 days')),
                        '10th_date' => date('Y-m-d', strtotime($newDate. ' + 126 days')),
                        '11th_date' => date('Y-m-d', strtotime($newDate. ' + 140 days')),
                        '12th_date' => date('Y-m-d', strtotime($newDate. ' + 154 days')),

                        '1st_pay' => $storedOrder->down_payment,
                        '2nd_pay' => 00.00,
                        '3rd_pay' => 00.00,
                        '4th_pay' => 00.00,
                        '5th_pay' => 00.00,
                        '6th_pay' => 00.00,
                        '7th_pay' => 00.00,
                        '8th_pay' => 00.00,
                        '9th_pay' => 00.00,
                        '10th_pay' => 00.00,
                        '11th_pay' => 00.00,
                        '12th_pay' => 00.00,

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
