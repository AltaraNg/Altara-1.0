<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_requests', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('updated_by')->nullable();
            $table->unsignedInteger('accepted_by')->nullable();
            $table->unsignedInteger('declined_by')->nullable();
            $table->string('order_type');
            $table->timestamp('request_date');
            $table->string('status');
            $table->timestamps();

            $table->foreign('updated_by')->references('id')->on('customers');
            $table->foreign('accepted_by')->references('id')->on('customers');
            $table->foreign('declined_by')->references('id')->on('customers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_requests');
    }
}
