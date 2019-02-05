<?php

use App\Supplier;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SuppliersTableSeeder extends Seeder
{
   /**
    * Run the database seeds.
    *
    * @return void
    */
   public function run()
   {
      $faker = Factory::create();
      DB::table('suppliers')->delete();
      foreach (range(1, 30) as $i) {
         Supplier::create([
            'user_id' => $i,
//            'category_id' => rand(1, 13),
            'full_name' => $faker->firstName . ' ' . $faker->lastName,
            'address' => $faker->streetAddress,
            'phone_number' => $faker->phoneNumber,
            'email' => $faker->safeEmail,
            'date_of_reg' => $faker->date('Y-m-d'),
            'status' => $faker->boolean,
            'contact_person_name' => $faker->firstName . ' ' . $faker->lastName
         ]);
      }
   }
}
