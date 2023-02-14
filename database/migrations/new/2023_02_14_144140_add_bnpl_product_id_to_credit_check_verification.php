<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddBnplProductIdToCreditCheckVerification extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('credit_checker_verifications', function (Blueprint $table) {
            $table->unsignedBigInteger('bnpl_vendor_product_id');
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
        Schema::table('credit_checker_verifications', function (Blueprint $table) {
            //
        });
    }
}
