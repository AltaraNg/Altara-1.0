<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLateFeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('late_fees', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('order_id')->nullable();
            $table->decimal('amount', 8, 2);
            $table->timestamp('date_paid')->nullable();
            $table->foreign('order_id')->references('id')->on('new_orders');
            $table->date('date_created');
            $table->date('date_updated');
            $table->unique(['order_id', "date_created"], 'order_day_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('late_fees');
    }
}
