<?php

use App\Order;
use App\Reminder;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReminderTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $type = array("sms", "call");
        DB::table('reminders')->delete();
        $data = Order::orderBy('id', 'DESC')->take(300)->get();
        $faker = Factory::create();
        foreach ($data as $order) {
            Reminder::create([
                "customer_id" => $order->customer_id,
                "order_id" => $order->id,
                "sms_id" => rand(1, 100),
                "repayment_level" => rand(1, 12),
                "feedback" => $faker->paragraph,
                "dva_id" => $order->floorAgent->id,
                "type" => $type[rand(0, 1)],
                "date" => date('Y-m-d')
            ]);
        }
    }
}
