<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePromiseCallsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('promise_calls', function (Blueprint $table) {
            $table->increments('id');
            $table->string('order_id');
            $table->unsignedInteger('user_id')->index()->nullable();//FK
            $table->unsignedInteger('customer_id')->index()->nullable();//FK
            $table->text('feedback');
            $table->date('date')->nullable();
            $table->timestamps();
        });

        Schema::table('promise_calls', function ($table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('customer_id')->references('id')->on('customers');
            $table->foreign('order_id')->references('id')->on('orders');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('promise_calls');
    }
}
