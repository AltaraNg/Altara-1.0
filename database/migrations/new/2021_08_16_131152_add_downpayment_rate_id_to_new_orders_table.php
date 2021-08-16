<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDownpaymentRateIdToNewOrdersTable extends Migration
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
            $table->foreign('down_payment_rate_id')->references('id')->on('down_payment_rates');
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
            //
            $table->dropColumn('down_payment_rate_id');
        });
    }
}
