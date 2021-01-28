<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateNewOrdersTable extends Migration
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
            $table->string('serial_number')->unique()->nullable();
            $table->unsignedInteger('owner_id')->nullable();
            $table->unsignedInteger('sales_category_id')->nullable();
            $table->foreign('sales_category_id')->references('id')->on('sales_categories');
            $table->foreign('owner_id')->references('id')->on('users');

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
            $table->dropColumn('serial_number');
            $table->dropForeign(['owner_id']);
            $table->dropForeign(['sales_category_id']);

        });
    }
}
