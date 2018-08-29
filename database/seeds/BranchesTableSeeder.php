<?php

use App\Branch;
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
        $lagos = DB::table('states')->where('name','=', 'Lagos')->select('id')->get();
        $lagos = $lagos[0]->id;
        $ibadan = DB::table('states')->where('name','=', 'Oyo')->select('id')->get();
        $ibadan = $ibadan[0]->id;

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
