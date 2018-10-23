<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

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
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedInteger('role_id')->index()->nullable();
            $table->string('staff_id')->unique();
            $table->string('full_name');
            $table->string('date_of_appointment');
            $table->string('date_of_exit')->nullable();
            $table->string('status');
            $table->string('phone_number')->unique();
            $table->string('highest_qualification');
            $table->unsignedInteger('branch_id')->index()->nullable();
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
        Schema::table('users', function ($table) {
            $table->foreign('role_id')->references('id')->on('roles');
            $table->foreign('branch_id')->references('id')->on('branches');
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
