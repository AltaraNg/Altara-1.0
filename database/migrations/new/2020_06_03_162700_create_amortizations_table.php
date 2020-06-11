<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAmortizationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('amortizations', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('new_order_id')->index();
            $table->foreign('new_order_id')->references('id')->on('new_orders')->onDelete('cascade')->onUpdate('cascade');
            $table->string('expected_payment_date')->index();
            $table->string('actual_payment_date')->nullable();
            $table->float('expected_amount')->index();
            $table->float('actual_amount')->nullable();
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
        Schema::dropIfExists('amortizations');
    }
}
