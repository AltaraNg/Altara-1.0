<?php

use App\State;
use Illuminate\Database\Seeder;

class StatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $state = new State();
        $state->name = "Abia";
        $state->save();

        $state = new State();
        $state->name = "Adamawa";
        $state->save();

        $state = new State();
        $state->name = "Akwa Ibom";
        $state->save();

        $state = new State();
        $state->name = "Anambra";
        $state->save();

        $state = new State();
        $state->name = "Bauchi";
        $state->save();

        $state = new State();
        $state->name = "Bayelsa";
        $state->save();

        $state = new State();
        $state->name = "Benue";
        $state->save();

        $state = new State();
        $state->name = "Borno";
        $state->save();

        $state = new State();
        $state->name = "Cross River";
        $state->save();

        $state = new State();
        $state->name = "Delta";
        $state->save();

        $state = new State();
        $state->name = "Ebonyi";
        $state->save();

        $state = new State();
        $state->name = "Edo";
        $state->save();

        $state = new State();
        $state->name = "Ekiti";
        $state->save();

        $state = new State();
        $state->name = "Enugu";
        $state->save();

        $state = new State();
        $state->name = "Gombe";
        $state->save();

        $state = new State();
        $state->name = "Imo";
        $state->save();

        $state = new State();
        $state->name = "Jigawa";
        $state->save();

        $state = new State();
        $state->name = "Kaduna";
        $state->save();

        $state = new State();
        $state->name = "Kano";
        $state->save();

        $state = new State();
        $state->name = "Katsina";
        $state->save();

        $state = new State();
        $state->name = "Kebbi";
        $state->save();

        $state = new State();
        $state->name = "Kogi";
        $state->save();

        $state = new State();
        $state->name = "Kwara";
        $state->save();

        $state = new State();
        $state->name = "Lagos";
        $state->save();

        $state = new State();
        $state->name = "Nasarawa";
        $state->save();

        $state = new State();
        $state->name = "Niger";
        $state->save();

        $state = new State();
        $state->name = "Ogun";
        $state->save();

        $state = new State();
        $state->name = "Ondo";
        $state->save();

        $state = new State();
        $state->name = "Osun";
        $state->save();

        $state = new State();
        $state->name = "Oyo";
        $state->save();

        $state = new State();
        $state->name = "Plateau";
        $state->save();

        $state = new State();
        $state->name = "Rivers";
        $state->save();

        $state = new State();
        $state->name = "Sokoto";
        $state->save();

        $state = new State();
        $state->name = "Taraba";
        $state->save();

        $state = new State();
        $state->name = "Yobe";
        $state->save();

        $state = new State();
        $state->name = "Zamfara";
        $state->save();

        $state = new State();
        $state->name = "FCT";
        $state->save();
    }
}
