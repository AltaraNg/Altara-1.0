<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('credit_checker_verifications', function (Blueprint $table) {
            $table->unsignedBigInteger('bnpl_vendor_product_id')->nullable()->change();
            $table->unsignedInteger('product_id')->nullable();
            $table->foreign('product_id')->references('id')->on('products');
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
            $table->dropConstrainedForeignId('product_id');
            $table->dropColumn('product_id');
        });
    }
};
