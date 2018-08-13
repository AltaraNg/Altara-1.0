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
        $role->name = 'Software Engineering Lead';
        $role->save();

        $role = new Role();
        $role->name = 'Product Manager';
        $role->save();

        $role = new Role();
        $role->name = 'Peoples Operation Lead';
        $role->save();

        $role = new Role();
        $role->name = 'Collections Lead';
        $role->save();

        $role = new Role();
        $role->name = 'Shop Operation Lead';
        $role->save();

        $role = new Role();
        $role->name = 'Operation Lead';
        $role->save();

        $role = new Role();
        $role->name = 'Software Developer';
        $role->save();

        $role = new Role();
        $role->name = 'Direct Sales Lead';
        $role->save();

        $role = new Role();
        $role->name = 'Direct Sales Agent';
        $role->save();

        $role = new Role();
        $role->name = 'Shop Floor Assistant';
        $role->save();

        $role = new Role();
        $role->name = 'Document Verification Agent';
        $role->save();

        $role = new Role();
        $role->name = 'Document Collections Agent';
        $role->save();

        $role = new Role();
        $role->name = 'Internal Operations Officer';
        $role->save();

    }
}
