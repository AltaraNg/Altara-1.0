<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRenewalPromptersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('renewal_prompters', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('renewal_prompter_status_id');
            $table->foreign('renewal_prompter_status_id')->references('id')->on('renewal_prompter_statuses')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedInteger('order_id');
            $table->foreign('order_id')->references('id')->on('new_orders')->onDelete('cascade')->onUpdate('cascade');
            $table->string('feedback')->nullable();
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
        Schema::dropIfExists('renewal_prompters');
    }
}
