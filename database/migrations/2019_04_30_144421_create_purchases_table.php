<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePurchasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchases', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->string('order_id')->primary();
            $table->date('order_date');
            $table->unsignedInteger('sales_category')->index();
            $table->unsignedInteger('customer_id')->index();
            $table->string('product_sku');
            $table->double('product_price',10,2);
            $table->double('down_payment',10,2);
            $table->integer('product_qty');
            $table->unsignedInteger('sales_type')->index();
            $table->unsignedInteger('discount')->index();
            $table->double('repayment_amount',10,2);
            $table->string('sales_agent_id');
            $table->unsignedInteger('payment_method')->index();
            $table->unsignedInteger('deposit_to')->index();
            $table->integer('return');

            $table->timestamps();
        });

        Schema::table('purchases',function ($table){
            $table->foreign('sales_category')->references('id')->on('sales_categories');
            $table->foreign('customer_id')->references('id')->on('customers');
            $table->foreign('sales_type')->references('id')->on('sales_types');
            $table->foreign('discount')->references('id')->on('discounts');
            $table->foreign('sales_agent_id')->references('staff_id')->on('users');
            $table->foreign('payment_method')->references('id')->on('payment_methods');
            $table->foreign('deposit_to')->references('id')->on('banks');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('purchases');
    }
}
