<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateLateFeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('late_fees', function (Blueprint $table) {
            //
            $table->foreign('order_id')->references('id')->on('new_orders');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('late_fees', function (Blueprint $table) {
            //
            $table->dropForeign('order_id');
        });
    }
}
