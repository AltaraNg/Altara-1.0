<?php

use Illuminate\Database\Seeder;

class SupplierCategorySeeder extends Seeder
{
    /**
     * Run the database seeders.
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