<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contact_customers', function (Blueprint $table) {
            $table->id();
            $table->string('reg_id')->unique()->index();
            $table->string('phone')->unique();
            $table->string('email')->unique()->nullable();
            $table->string('name')->nullable();
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('employment_status_id');
            $table->foreign('employment_status_id')->references('id')->on('employment_statuses');
            $table->unsignedBigInteger('customer_stage_id');
            $table->foreign('customer_stage_id')->references('id')->on('customer_stages');
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
        Schema::dropIfExists('contact_customers');
    }
}
