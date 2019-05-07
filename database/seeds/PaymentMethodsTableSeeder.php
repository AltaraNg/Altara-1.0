<?php

use App\PaymentMethod;
use App\SalesCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentMethodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $nameArray = array('cash', 'transfer','pos');
        DB::table('payment_methods')->delete();
        for ($i = 0; $i < count($nameArray); $i++) {
            PaymentMethod::create(['name' => $nameArray[$i]]);
        }
    }
}
