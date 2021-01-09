<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomRepaymentDatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('custom_repayment_dates', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('new_order_id')->index();
            $table->foreign('new_order_id')->references('id')->on('new_orders');
            $table->integer('custom_date')->default(1);
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
        Schema::dropIfExists('custom_repayment_dates');
    }
}
