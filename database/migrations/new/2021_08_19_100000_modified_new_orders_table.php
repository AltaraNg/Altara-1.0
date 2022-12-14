<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ModifiedNewOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('new_orders', function (Blueprint $table) {
            //
            $table->unsignedInteger('down_payment_rate_id')->nullable();
            $table->unsignedInteger('payment_gateway_id')->nullable();
            $table->unsignedInteger('order_type_id')->nullable();
            //foreign keys
            $table->foreign('down_payment_rate_id')->references('id')->on('down_payment_rates');
            $table->foreign('order_type_id')->references('id')->on('order_types');
            $table->foreign('payment_gateway_id')->references('id')->on('payment_gateways');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('new_orders', function (Blueprint $table) {
            $table->dropColumn('down_payment_rate_id');
            $table->dropColumn('order_type_id'); 
            $table->dropColumn('payment_gateway_id');
        });
    }
}
