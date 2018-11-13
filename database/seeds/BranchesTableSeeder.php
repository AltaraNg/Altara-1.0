<?php

use App\Branch;
use App\State;
use Illuminate\Database\Seeder;

class BranchesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $lagos = State::where('name', 'Lagos')->select('id')->first()->id;
        $ibadan = State::where('name', 'Oyo')->select('id')->first()->id;

        $branch = new Branch();
        $branch->name = 'Ikoyi';
        $branch->state_id = $lagos;
        $branch->phone_yoruba = '08012345698';
        $branch->phone_english = '08012345698';
        $branch->description = 'Raymond Njoku, Ikoyi';
        $branch->save();

        $branch = new Branch();
        $branch->name = 'Challenge';
        $branch->state_id = $ibadan;
        $branch->phone_yoruba = '08115103525';
        $branch->phone_english = '08150479425';
        $branch->description = 'Laromak plaza, (1st Floor), no. 60 Elewura Bus-stop Challenge Ibadan opposite SmileBuilding.';
        $branch->save();

        $branch = new Branch();
        $branch->name = 'Dugbe';
        $branch->state_id = $ibadan;
        $branch->phone_yoruba = '08051932680';
        $branch->phone_english = '08150479425';
        $branch->description = 'shop 119, Ayorinde Akintola, Adamasingba complex, Ibadan';
        $branch->save();

        $branch = new Branch();
        $branch->name = 'Iwo Road';
        $branch->state_id = $ibadan;
        $branch->phone_yoruba = '08115101751';
        $branch->phone_english = '08150479425';
        $branch->description = 'Suite 5,6,7 & 8, Praise plaza besides Toun specialist hospital, new Ife road.';
        $branch->save();

        $branch = new Branch();
        $branch->name = 'Gate';
        $branch->state_id = $ibadan;
        $branch->phone_yoruba = '08115103079';
        $branch->phone_english = '08150479425';
        $branch->description = 'shop B42/B43, NTA shopping complex, Agodi Gate, Ibadan';
        $branch->save();

        $branch = new Branch();
        $branch->name = 'Bodija';
        $branch->state_id = $ibadan;
        $branch->phone_yoruba = '08115103525';
        $branch->phone_english = '08150479425';
        $branch->description = 'Suit B3 Albarka shopping complex Bodija, Ibadan';
        $branch->save();
    }
}
