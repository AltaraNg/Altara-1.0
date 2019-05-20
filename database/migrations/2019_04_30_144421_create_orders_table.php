<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->string('id')->primary()->unique();
            $table->date('order_date');
            $table->unsignedInteger('sales_category_id')->index()->nullable();
            $table->unsignedInteger('customer_id')->index()->nullable();
            $table->string('product_sku');
            $table->double('product_price', 10, 2);
            $table->double('down_payment', 10, 2);
            $table->integer('product_qty');
            $table->unsignedInteger('sales_type_id')->index()->nullable();
            $table->unsignedInteger('discount_id')->index()->nullable();
            $table->double('repayment_amount', 10, 2);
            $table->string('sales_agent_id');
            $table->unsignedInteger('referrer')->nullable();
            $table->unsignedInteger('payment_method_id')->index()->nullable();
            $table->unsignedInteger('deposit_to')->index()->nullable();
            $table->boolean('return');
            $table->timestamps();
        });

        Schema::table('orders', function ($table) {
            $table->foreign('sales_category_id')->references('id')->on('sales_categories');
            $table->foreign('customer_id')->references('id')->on('customers');
            $table->foreign('sales_type_id')->references('id')->on('sales_types');
            $table->foreign('discount_id')->references('id')->on('discounts');
            $table->foreign('sales_agent_id')->references('staff_id')->on('users');
            $table->foreign('referrer')->references('id')->on('customers');
            $table->foreign('payment_method_id')->references('id')->on('payment_methods');
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
        Schema::dropIfExists('orders');
    }
}
