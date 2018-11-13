<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedInteger('user_id')->index()->nullable();
            $table->string('staff_name');
            $table->unsignedInteger('customer_id')->index()->nullable();
            $table->string('customer_meetup');
            $table->string('date_of_visit');
            $table->string('time_of_visit');
            $table->string('what_he_sells');
            $table->string('confirm_address');
            $table->text('business_info');
            $table->string('product_info');
            $table->string('aware_of_plan');
            $table->text('info_from_neighbors_desc')->nullable();
            $table->string('business_or_work_duration');
            $table->integer('approval_status')->nullable();
            $table->timestamps();
        });
        Schema::table('addresses', function ($table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('customer_id')->references('id')->on('customers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
}
