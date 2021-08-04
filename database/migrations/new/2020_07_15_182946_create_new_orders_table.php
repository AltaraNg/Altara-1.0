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
            $table->string('order_number')->nullable(false)->unique()->index();
            $table->date('order_date')->nullable(false);
            $table->unsignedInteger('customer_id')->index();
            $table->foreign('customer_id')->references('id')->on('customers');
            $table->unsignedInteger('product_id');
            $table->foreign('product_id')->references('id')->on('products');
            $table->double('product_price');
            $table->double('down_payment');
            $table->double('repayment');
            $table->unsignedInteger('repayment_duration_id')->index();
            $table->foreign('repayment_duration_id')->references('id')->on('repayment_durations');
            $table->unsignedInteger('repayment_cycle_id');
            $table->foreign('repayment_cycle_id')->references('id')->on('repayment_cycles');
            $table->unsignedInteger('business_type_id');
            $table->foreign('business_type_id')->references('id')->on('business_types');
            $table->unsignedInteger('status_id');
            $table->foreign('status_id')->references('id')->on('order_statuses');
            $table->unsignedInteger('user_id')->index();
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedInteger('branch_id')->index();
            $table->foreign('branch_id')->references('id')->on('branches');
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
