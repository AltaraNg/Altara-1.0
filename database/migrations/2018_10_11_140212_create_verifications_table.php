<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

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
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedInteger('user_id')->index()->nullable();
            $table->unsignedInteger('customer_id')->index()->nullable();
            $table->unsignedInteger('passport')->default(0);
            $table->unsignedInteger('id_card')->default(0);
            $table->unsignedInteger('address_status')->default(0);
            $table->unsignedInteger('work_guarantor_status')->default(0);
            $table->unsignedInteger('personal_guarantor_status')->default(0);
            $table->timestamps();
        });
        Schema::table('verifications', function ($table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('customer_id')->references('id')->on('customers');
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
