<?php

use App\Caution;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CautionTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        DB::table('cautions')->delete();
        for ($i = 0; $i < 30; $i++) {
            Caution::create([
                'user_id' => rand(1,30),
                'issuer_id' => rand(1,30),
                'reason' => $faker->paragraph(3),
                'penalty' => $faker->sentence,
                'date' => '2018-10-' . ($i+1)
            ]);
        }
    }
}
