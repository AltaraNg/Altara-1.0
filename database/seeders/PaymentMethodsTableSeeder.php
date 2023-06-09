<?php

use App\PaymentMethod;
use App\SalesCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentMethodsTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $methods = ['cash', 'transfer', 'pos'];
        DB::table('payment_methods')->delete();
        foreach ($methods as $method) {
            PaymentMethod::create(['name' => $method]);
        }
    }
}
