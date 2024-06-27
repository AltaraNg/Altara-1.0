<?php
namespace Database\Seeders;

use App\Models\RepaymentDuration;
use Illuminate\Database\Seeder;

class PaymentDurationTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $name = ['three_months', 'six_months', 'twelve_months'];
        $value = [90, 180, 360];

        for ($i=0; $i<count($name); $i++){
            RepaymentDuration::create([
                'name' => $name[$i],
                'value' => $value[$i]
            ]);
        }
    }
}
