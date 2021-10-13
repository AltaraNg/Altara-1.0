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
            $table->unsignedInteger('order_id');
            $table->unsignedInteger('user_id');
            $table->string('feedback')->nullable();
            $table->timestamps();

            $table->foreign('renewal_prompter_status_id')->references('id')->on('renewal_prompter_statuses')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('order_id')->references('id')->on('new_orders')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
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
