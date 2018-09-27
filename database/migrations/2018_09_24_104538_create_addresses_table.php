<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->string('staff_name');
            $table->unsignedInteger('customer_id');
            $table->string('customer_meetup');
            $table->string('what_he_sells');
            $table->string('confirm_address');
            $table->text('business_info');
            $table->string('product_info');
            $table->string('aware_of_plan');
            $table->text('info_from_neighbors_desc')->nullable();
            $table->string('business_or_work_duration');
            $table->integer('approval_status')->nullable();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('user');
            $table->foreign('customer_id')->references('id')->on('customer');
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
