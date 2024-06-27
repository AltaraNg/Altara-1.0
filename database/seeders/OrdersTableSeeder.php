<?php

use App\Models\Customer;
use App\Models\Order;
use App\Models\Purchase;
use App\Models\RepaymentFormal;
use App\Models\RepaymentInformal;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        DB::table('orders')->delete();
        $data = Purchase::orderBy('order_date', 'DESC')->with('oldRepayment')->get();
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

                if ($customer[0]->employment_status == 'formal' || $customer[0]->employment_status == 'Salaried') {
                    RepaymentFormal::create([
                        'repayment_id' => $storedOrder->id,
                        'date_of_last_payment' => $newDate,
                        'date_of_next_payment' => date('Y-m-d', strtotime($newDate . ' + 28 days')),


                        /*'1st_date' => $newDate,
                        '1st_pay' => $storedOrder->repayment_amount,
                        '1st_payment_method' => rand(1, 3),
                        '1st_payment_bank' => rand(1, 18),*/


                        '1st_date' => $order->oldRepayment['2nd_date'],
                        '2nd_date' => $order->oldRepayment['4th_date'],
                        '3rd_date' => $order->oldRepayment['6th_date'],
                        '4th_date' => $order->oldRepayment['8th_date'],
                        '5th_date' => $order->oldRepayment['10th_date'],
                        '6th_date' => $order->oldRepayment['12th_date'],


                        '1st_pay' => $order->oldRepayment['1st_pay'] + $order->oldRepayment['2nd_pay'],
                        '2nd_pay' => $order->oldRepayment['3rd_pay'] + $order->oldRepayment['4th_pay'],
                        '3rd_pay' => $order->oldRepayment['5th_pay'] + $order->oldRepayment['6th_pay'],
                        '4th_pay' => $order->oldRepayment['7th_pay'] + $order->oldRepayment['8th_pay'],
                        '5th_pay' => $order->oldRepayment['9th_pay'] + $order->oldRepayment['10th_pay'],
                        '6th_pay' => $order->oldRepayment['11th_pay'] + $order->oldRepayment['12th_pay'],


                        '1st_payment_method' => rand(1,3),
                        '2nd_payment_method' => rand(1,3),
                        '3rd_payment_method' => rand(1,3),
                        '4th_payment_method' => rand(1,3),
                        '5th_payment_method' => rand(1,3),
                        '6th_payment_method' => rand(1,3),


                        '1st_payment_bank' => rand(1,3),
                        '2nd_payment_bank' => rand(1,3),
                        '3rd_payment_bank' => rand(1,3),
                        '4th_payment_bank' => rand(1,3),
                        '5th_payment_bank' => rand(1,3),
                        '6th_payment_bank' => rand(1,3),
                    ]);
                } else {
                    RepaymentInformal::create([
                        'repayment_id' => $storedOrder->id,
                        'date_of_last_payment' => $newDate,
                        'date_of_next_payment' => date('Y-m-d', strtotime($newDate . ' + 14 days')),


                        /*'1st_date' => $newDate,
                        '1st_pay' => $storedOrder->repayment_amount,
                        '1st_payment_method' => rand(1, 3),
                        '1st_payment_bank' => rand(1, 18),*/


                        '1st_date' => $order->oldRepayment['1st_date'],
                        '2nd_date' => $order->oldRepayment['2nd_date'],
                        '3rd_date' => $order->oldRepayment['3rd_date'],
                        '4th_date' => $order->oldRepayment['4th_date'],
                        '5th_date' => $order->oldRepayment['5th_date'],
                        '6th_date' => $order->oldRepayment['6th_date'],
                        '7th_date' => $order->oldRepayment['7th_date'],
                        '8th_date' => $order->oldRepayment['8th_date'],
                        '9th_date' => $order->oldRepayment['9th_date'],
                        '10th_date' => $order->oldRepayment['10th_date'],
                        '11th_date' => $order->oldRepayment['11th_date'],
                        '12th_date' => $order->oldRepayment['12th_date'],


                        '1st_pay' => $order->oldRepayment['1st_pay'],
                        '2nd_pay' => $order->oldRepayment['2nd_pay'],
                        '3rd_pay' => $order->oldRepayment['3rd_pay'],
                        '4th_pay' => $order->oldRepayment['4th_pay'],
                        '5th_pay' => $order->oldRepayment['5th_pay'],
                        '6th_pay' => $order->oldRepayment['6th_pay'],
                        '7th_pay' => $order->oldRepayment['7th_pay'],
                        '8th_pay' => $order->oldRepayment['8th_pay'],
                        '9th_pay' => $order->oldRepayment['9th_pay'],
                        '10th_pay' => $order->oldRepayment['10th_pay'],
                        '11th_pay' => $order->oldRepayment['11th_pay'],
                        '12th_pay' => $order->oldRepayment['12th_pay'],


                        '1st_payment_method' => rand(1,3),
                        '2nd_payment_method' => rand(1,3),
                        '3rd_payment_method' => rand(1,3),
                        '4th_payment_method' => rand(1,3),
                        '5th_payment_method' => rand(1,3),
                        '6th_payment_method' => rand(1,3),
                        '7th_payment_method' => rand(1,3),
                        '8th_payment_method' => rand(1,3),
                        '9th_payment_method' => rand(1,3),
                        '10th_payment_method' => rand(1,3),
                        '11th_payment_method' => rand(1,3),
                        '12th_payment_method' => rand(1,3),


                        '1st_payment_bank' => rand(1,3),
                        '2nd_payment_bank' => rand(1,3),
                        '3rd_payment_bank' => rand(1,3),
                        '4th_payment_bank' => rand(1,3),
                        '5th_payment_bank' => rand(1,3),
                        '6th_payment_bank' => rand(1,3),
                        '7th_payment_bank' => rand(1,3),
                        '8th_payment_bank' => rand(1,3),
                        '9th_payment_bank' => rand(1,3),
                        '10th_payment_bank' => rand(1,3),
                        '11th_payment_bank' => rand(1,3),
                        '12th_payment_bank' => rand(1,3),
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
