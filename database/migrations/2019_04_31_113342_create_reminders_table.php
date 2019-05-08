<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRemindersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reminders', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedInteger('customer_id')->index()->nullable();
            $table->string('order_id');
            $table->unsignedInteger('sms_id')->index()->nullable();
            $table->string('repayment_level');
            $table->string('feedback');
            $table->unsignedInteger('dva_id');
            $table->string('type');
            $table->dateTime('date');
            $table->timestamps();
        });

        Schema::table('reminders', function ($table) {
            $table->foreign('customer_id')->references('id')->on('customers');
            $table->foreign('order_id')->references('id')->on('orders');
            $table->foreign('dva_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reminders');
    }
}
