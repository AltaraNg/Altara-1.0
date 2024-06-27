<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddOrderIdAndAmountToMerchantCommissionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('merchant_commissions', function (Blueprint $table) {
            $table->unsignedInteger('new_order_id')->nullable();
            $table->float('amount')->default(0);
            $table->foreign('new_order_id', 'new_order_id_foreign')->references('id')->on('new_orders');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('merchant_commissions', function (Blueprint $table) {
            $table->dropColumn('new_order_id');
            $table->dropColumn('amount');
            $table->dropForeign('new_order_id_foreign');
        });
    }
}
