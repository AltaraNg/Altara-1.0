<?php

use App\NewOrder;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewOrderTableSeeder extends Seeder
{

public $product = [];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $start = strtotime("10 May 2020");
        $end = strtotime("31 June 2020");
        DB::table('new_orders')->delete();
        $this->getRandomProductId();

        for ($i = 0; $i < 10; $i++) {
            NewOrder::create([
                'order_date' => mt_rand($start, $end),
                'customer_id'=> $this->getRandomCustomerId(),
                'product_id' => $this->product->product_id,
                'user_id' => $this->getRandomUserId(),
                'business_type_id' => $this->getRandomBusinessTypeId(),
                'down_payment_rate_id' => $this->getRandomDownPaymentId(),
                'repayment_cycle_id' => $this->getRandomRepaymentCycleId(),
                'status_id' => $this->getRandomStatusId(),
                'repayment_dur_id' => $this->getRandomRepaymentDurationId(),
                'product_price' => $this->product->pc_pprice,
                'down_payment' => rand(1, 9) * 10000,
                'repayment' => rand(1, 9) * 1000

            ]);
        }

    }

    private function getRandomUserId() {
        $user = \App\User::inRandomOrder()->first();
        return $user->id;
    }
    private function getRandomCustomerId() {
        $customer = \App\StoreProduct::inRandomOrder()->first();
        return $customer->id;
    }
    private function getRandomProductId() {
        $this->product = \App\StoreProduct::inRandomOrder()->first();
        return $this->product;
    }
    private function getRandomRepaymentDurationId() {
        $repayment_dur = \App\RepaymentDuration::inRandomOrder()->first();
        return $repayment_dur->id;
    }
    private function getRandomDownPaymentId()
    {
        $down_payment = \App\DownPaymentRate::inRandomOrder()->first();
        return $down_payment->id;
    }

    private function getRandomRepaymentCycleId() {
        $repayment_cycle = \App\RepaymentCycle::inRandomOrder()->first();
        return $repayment_cycle->id;
    }
    private function getRandomBusinessTypeId() {
        $business_type = \App\BusinessType::inRandomOrder()->first();
        return $business_type->id;
    }

    private function getRandomStatusId() {
        $order_status = \App\OrderStatus::inRandomOrder()->first();
        return $order_status->id;
    }

}
