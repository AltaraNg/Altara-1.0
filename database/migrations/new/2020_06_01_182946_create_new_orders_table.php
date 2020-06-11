<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('new_orders', function (Blueprint $table) {
            $table->increments('id');
            $table->date('order_date')->nullable(false);
            $table->unsignedInteger('customer_id')->index();
            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade')->onUpdate('cascade');
            $table->string('product_id')->index();
            $table->foreign('product_id')->references('product_id')->on('new_products')->onDelete('cascade')->onUpdate('cascade');
            $table->double('product_price');
            $table->double('down_payment');
            $table->double('repayment');
            $table->unsignedInteger('repayment_dur_id')->index();
            $table->foreign('repayment_dur_id')->references('id')->on('repayment_durations')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedInteger('down_payment_rate_id')->index();
            $table->foreign('down_payment_rate_id')->references('id')->on('down_payment_rates')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedInteger('repayment_cycle_id')->index();
            $table->foreign('repayment_cycle_id')->references('id')->on('repayment_cycles')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedInteger('business_type_id')->index();
            $table->foreign('business_type_id')->references('id')->on('business_types')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedInteger('payment_method_id')->index();
            $table->foreign('payment_method_id')->references('id')->on('payment_methods')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedInteger('status_id')->index();
            $table->foreign('status_id')->references('id')->on('order_statuses')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedInteger('user_id')->index();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedInteger('custom_date')->index()->nullable();
            $table->foreign('custom_date')->references('id')->on('custom_repayment_dates')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('new_orders');
    }
}
