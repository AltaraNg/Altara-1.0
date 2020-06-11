<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            //StatesTableSeeder::class,
            //BranchesTableSeeder::class,
            //RolesTableSeeder::class,
            //UsersTableSeeder::class,
            //CustomerTableSeeder::class,
            //BanksTableSeeder::class,
            //EmployeeCategorySeeder::class,
//            BrandsTableSeeder::class,
//            CategoriesTableSeeder::class,
//            ProductsTableSeeder::class,
//            BrandCategoryTableSeeder::class,
            //SupplierCategorySeeder::class,
            //AttendanceTableSeeder::class,
            //CautionTableSeeder::class,
//            SuppliersTableSeeder::class,
            /*newest*/
//            SalesCategoriesTableSeeder::class,
//            SalesTypesTableSeeder::class,
//            DiscountsTableSeeder::class,
//            PaymentMethodsTableSeeder::class,
//            OrdersTableSeeder::class,
            DownPaymentRateTableSeeder::class,
            PaymentDurationTableSeeder::class,
//            PaymentMethodsTableSeeder::class,
            RepaymentCycleTableSeeder::class,
            BusinessTypeTableSeeder::class,
            //ReminderTableSeeder::class,
        ]);
    }
}
