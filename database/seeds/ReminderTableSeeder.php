<?php

use App\Reminder;
use Illuminate\Database\Seeder;

class ReminderTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Reminder::class, 100)->create();
    }
}
