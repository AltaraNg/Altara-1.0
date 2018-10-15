<?php

use App\Branch;
use App\State;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BranchesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $lagos = State::where('name', 'Lagos')->select('id')->first();
        $lagos = $lagos->id;
        $ibadan = State::where('name', 'Oyo')->select('id')->first();
        $ibadan = $ibadan->id;

        $branch = new Branch();
        $branch->name = 'Ikoyi';
        $branch->state_id = $lagos;
        $branch->save();

        $branch = new Branch();
        $branch->name = 'Challenge';
        $branch->state_id = $ibadan;
        $branch->save();

        $branch = new Branch();
        $branch->name = 'Dugbe';
        $branch->state_id = $ibadan;
        $branch->save();

        $branch = new Branch();
        $branch->name = 'Iwo Road';
        $branch->state_id = $ibadan;
        $branch->save();

        $branch = new Branch();
        $branch->name = 'Gate';
        $branch->state_id = $ibadan;
        $branch->save();

        $branch = new Branch();
        $branch->name = 'Bodija';
        $branch->state_id = $ibadan;
        $branch->save();

    }
}
