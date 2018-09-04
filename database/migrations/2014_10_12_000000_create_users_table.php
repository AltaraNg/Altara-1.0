<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('role_id');
            $table->string('staff_id')->unique();
            $table->string('full_name');
            $table->string('date_of_appointment');
            $table->string('date_of_exit')->nullable();
            $table->string('status');
            $table->string('phone_number')->unique();
            $table->string('highest_qualification');
            $table->string('branch_id');
            $table->string('password');
            $table->string('email')->unique();
            $table->string('address');
            $table->string('gender');
            $table->string('referee_1');
            $table->string('referee_2');
            $table->string('referee_1_phone_no');
            $table->string('referee_2_phone_no');
            $table->string('date_of_birth');
            $table->integer('hr_id');
            $table->string('nationality');
            $table->string('next_of_kin_name');
            $table->string('next_of_kin_phone_no');
            $table->integer('portal_access')->default(1);
            $table->string('api_token')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
