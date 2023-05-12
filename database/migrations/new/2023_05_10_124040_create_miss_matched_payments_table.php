<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMissMatchedPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('miss_matched_payments', function (Blueprint $table) {
            $table->id();
            $table->string('reference')->nullable();
            $table->unsignedInteger('customer_id');
            $table->unsignedInteger('order_id');
            $table->string('expected_account_number')->nullable();
            $table->string('expected_account_name')->nullable();
            $table->string('expected_bank_name')->nullable();
            $table->string('actual_account_number')->nullable();
            $table->string('actual_account_name')->nullable();
            $table->string('actual_bank_name')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('customer_id')->references('id')->on('customers');
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
        Schema::dropIfExists('miss_matched_payments');
    }
}
