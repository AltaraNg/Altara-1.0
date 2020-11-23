<?php
namespace Database\Seeders;

use App\RepaymentCycle;
use Illuminate\Database\Seeder;

class RepaymentCycleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        RepaymentCycle::updateOrCreate(
            ['name' => RepaymentCycle::BIMONTHLY],
            ['value' => 14]
        );
        RepaymentCycle::updateOrCreate(
            ['name' => RepaymentCycle::MONTHLY],
            ['value' => 28]
        );
        RepaymentCycle::updateOrCreate(
            ['name' => RepaymentCycle::CUSTOM],
            ['value' => 30]
        );
    }
}
