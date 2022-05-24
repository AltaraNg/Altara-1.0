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
            $table->unsignedInteger('customer_id')->nullable();
            $table->unsignedInteger('processed_by')->nullable();
            $table->unsignedInteger('accepted_by')->nullable();
            $table->unsignedInteger('declined_by')->nullable();
            $table->string('order_type');
            $table->timestamp('request_date');
            $table->text('reason')->nullable();
            $table->string('status');
            $table->timestamps();

            $table->foreign('customer_id')->references('id')->on('customers');
            $table->foreign('processed_by')->references('id')->on('users');
            $table->foreign('accepted_by')->references('id')->on('users');
            $table->foreign('declined_by')->references('id')->on('users');
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
