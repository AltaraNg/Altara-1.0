<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVerificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('verifications', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->unsignedInteger('customer_id')->unsigned();
            $table->integer('passport')->unsigned()->default(0);
            $table->integer('id_card')->unsigned()->default(0);
            $table->integer('address_status')->unsigned()->default(0);
            $table->integer('work_guarantor_status')->unsigned()->default(0);
            $table->integer('personal_guarantor_status')->unsigned()->default(0);
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('user');
            $table->foreign('customer_id')->references('id')->on('customer');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('verifications');
    }
}
