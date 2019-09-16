<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkGuarantorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('work_guarantors', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedInteger('user_id')->index()->nullable();
            $table->string('staff_name');
            $table->unsignedInteger('customer_id')->index()->nullable();
            $table->integer('consent');
            $table->string('date_of_call');
            $table->string('time_of_call');
            $table->text('report');
            $table->timestamps();
        });
        Schema::table('work_guarantors', function ($table) {
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
        Schema::dropIfExists('work_guarantors');
    }
}
