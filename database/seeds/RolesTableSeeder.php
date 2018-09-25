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
        $role->save();
        $role = new Role();
        $role->name = 'General Manager';
        $role->save();
        $role = new Role();
        $role->name = 'Product Manager';
        $role->save();
        $role = new Role();
        $role->name = 'Business Analyst';
        $role->save();
        $role = new Role();
        $role->name = 'Internal Operations Lead';
        $role->save();
        $role = new Role();
        $role->name = 'People Operations Lead';
        $role->save();
        $role = new Role();
        $role->name = 'People Operation Officer';
        $role->save();
        $role = new Role();
        $role->name = 'Software Engineering Lead';
        $role->save();
        $role = new Role();
        $role->name = 'Software Developer';
        $role->save();
        $role = new Role();
        $role->name = 'IT Support Officer';
        $role->save();
        $role = new Role();
        $role->name = 'Showroom and Logistics Lead';
        $role->save();
        $role = new Role();
        $role->name = 'Operation Lead';
        $role->save();
        $role = new Role();
        $role->name = 'Collections Lead';
        $role->save();
        $role = new Role();
        $role->name = 'Store Supervisors';
        $role->save();
        $role = new Role();
        $role->name = 'Direct Sales Lead';
        $role->save();
        $role = new Role();
        $role->name = 'Collections/Verification Lead';
        $role->save();
        $role = new Role();
        $role->name = 'Direct Sales Agent';
        $role->save();
        $role = new Role();
        $role->name = 'Floor Sales Representatives';
        $role->save();
        $role = new Role();
        $role->name = 'Inventory Officers';
        $role->save();
        $role = new Role();
        $role->name = 'Document Verification Agent';
        $role->save();
        $role = new Role();
        $role->name = 'Collections Agent';
        $role->save();
        $role = new Role();
        $role->name = 'Driver';
        $role->save();
        $role = new Role();
        $role->name = 'Delivery Driver';
        $role->save();

    }
}
