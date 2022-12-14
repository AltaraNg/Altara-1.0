<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersDiscountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders_discounts', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('order_id');
            $table->foreign('order_id')->references('id')->on('new_orders');

            $table->unsignedInteger('discount_id');
            $table->foreign('discount_id')->references('id')->on('discounts');
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
        Schema::dropIfExists('orders_discounts');
    }
}
