<?php

use App\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->delete();
        $roles = [
            'President',
            'General Manager',
            'Product Manager',
            'Business Analyst',
            'Internal Operations Lead',
            'People Operations Lead',
            'People Operation Officer',
            'Software Engineering Lead',
            'Software Engineering',
            'IT Support Officer',
            'Showroom and Logistics Lead',
            'Operation Lead',
            'Collections Lead',
            'Store Supervisors',
            'Direct Sales Lead',
            'Collections/Verification Lead',
            'Direct Sales Agent Captain',
            'Direct Sales Agent',
            'Floor Sales Representatives',
            'Inventory Officers',
            'Document Verification Agent',
            'Document Verification Agent Captain',
            'Collections Agent',
            'Driver',
            'Delivery Driver',
            'Junior Accountant',
            'Buyer',
            'Software Application Support Officer',
            'Sales Coordinator',
        ];
        for ($i = 0; $i < count($roles); $i++) {
            Role::create(['name' => $roles[$i]]);
        }
    }
}
