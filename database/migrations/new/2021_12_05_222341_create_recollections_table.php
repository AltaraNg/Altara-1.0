<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecollectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recollections', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('new_order_id')->index();
            $table->string('status')->index();
            $table->integer('number_of_days');
            $table->timestamps();
            $table->foreign('new_order_id')->references('id')->on('new_orders');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recollections');
    }
}
