<?php

use App\Supplier;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SupplierCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*DB::table('supplier_category')->delete();
        for ($i = 0; $i < 12; $i++) {
            $supplier = Supplier::find($i+1)->first();
            for ($s = 0; $s < 3; $s++) {
                $supplier->categories()->attach(rand(1, 10));
            }
        }*/
    }
}
