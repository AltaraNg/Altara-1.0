<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBranchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('branches', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('employee_name', 50);
            $table->unsignedInteger('user_id')->index()->nullable();
            $table->string('employee_id', 30);
            $table->string('name')->unique();
            $table->string('status');
//            $table->string('category')->nullable();
            $table->string('phone_english');
            $table->string('phone_yoruba');
            $table->string('account_name')->nullable();
            $table->string('account_number')->nullable()->unique();
            $table->string('email')->nullable()->unique();
            $table->string('bank')->nullable();
            $table->unsignedInteger('state_id')->index()->nullable();
            $table->text('description');
            $table->timestamps();
        });
        Schema::table('branches', function ($table) {
//            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('state_id')->references('id')->on('states');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('branches');
    }
}
