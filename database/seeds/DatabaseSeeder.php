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
            StatesTableSeeder::class,
            BranchesTableSeeder::class,
            RolesTableSeeder::class,
            UsersTableSeeder::class,
            CustomerTableSeeder::class,
            BanksTableSeeder::class,
            EmployeeCategorySeeder::class,
            BrandsTableSeeder::class,
            CategoriesTableSeeder::class,
            SuppliersTableSeeder::class,
            ProductsTableSeeder::class,
            BrandCategoryTableSeeder::class,
            SupplierCategorySeeder::class,
            AttendanceTableSeeder::class,
        ]);
    }
}
