<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class MerchantCommissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('merchant_commissions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('commission_id');
            $table->unsignedInteger('merchant_id');
            $table->unsignedBigInteger('bnpl_vendor_product_id');

            $table->foreign('merchant_id')->references('id')->on('users');
            $table->foreign('commission_id')->references('id')->on('commissions');
            $table->foreign('bnpl_vendor_product_id')->references('id')->on('bnpl_vendor_products');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::create('merchant_commissions', function (Blueprint $table) {
            //
        });
    }
}
