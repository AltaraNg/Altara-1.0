<?php

use App\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = new Role();
        $role->name = 'President';
        $role->description = 'PD';
        $role->save();

        $role = new Role();
        $role->name = 'General Manager';
        $role->description = 'GM';
        $role->save();

        $role = new Role();
        $role->name = 'Product Manager';
        $role->description = 'PM';
        $role->save();

        $role = new Role();
        $role->name = 'Business Analyst';
        $role->description = 'BA';
        $role->save();

        $role = new Role();
        $role->name = 'Internal Operations Lead';
        $role->description = 'IOL';
        $role->save();

        $role = new Role();
        $role->name = 'People Operations Lead';
        $role->description = 'POL';
        $role->save();

        $role = new Role();
        $role->name = 'People Operation Officer';
        $role->description = 'POO';
        $role->save();

        $role = new Role();
        $role->name = 'Software Engineering Lead';
        $role->description = 'SEL';
        $role->save();

        $role = new Role();
        $role->name = 'Software Engineering';
        $role->description = 'SE';
        $role->save();

        $role = new Role();
        $role->name = 'IT Support Officer';
        $role->description = 'ISO';
        $role->save();

        $role = new Role();
        $role->name = 'Showroom and Logistics Lead';
        $role->description = 'SLL';
        $role->save();

        $role = new Role();
        $role->name = 'Operation Lead';
        $role->description = 'OL';
        $role->save();

        $role = new Role();
        $role->name = 'Collections Lead';
        $role->description = 'CL';
        $role->save();

        $role = new Role();
        $role->name = 'Store Supervisors';
        $role->description = 'SS';
        $role->save();

        $role = new Role();
        $role->name = 'Direct Sales Lead';
        $role->description = 'DSL';
        $role->save();

        $role = new Role();
        $role->name = 'Collections/Verification Lead';
        $role->description = 'CVL';
        $role->save();

        $role = new Role();
        $role->name = 'Direct Sales Agent Captain';
        $role->description = 'DSAC';
        $role->save();

        $role = new Role();
        $role->name = 'Direct Sales Agent';
        $role->description = 'DSA';
        $role->save();

        $role = new Role();
        $role->name = 'Floor Sales Representatives';
        $role->description = 'FSR';
        $role->save();

        $role = new Role();
        $role->name = 'Inventory Officers';
        $role->description = 'IO';
        $role->save();

        $role = new Role();
        $role->name = 'Document Verification Agent';
        $role->description = 'DVA';
        $role->save();

        $role = new Role();
        $role->name = 'Document Verification Agent Captain';
        $role->description = 'DVAC';
        $role->save();

        $role = new Role();
        $role->name = 'Collections Agent';
        $role->description = 'CA';
        $role->save();

        $role = new Role();
        $role->name = 'Driver';
        $role->description = 'DV';
        $role->save();

        $role = new Role();
        $role->name = 'Delivery Driver';
        $role->description = 'DDV';
        $role->save();

    }
}
