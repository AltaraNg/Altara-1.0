<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReturnsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('returns', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->string('order_id')->primary();
            $table->string('reason');
            $table->unsignedInteger('customer_id')->index();
            $table->string('floor_agent_id');
            $table->timestamps();
        });

        Schema::table('returns',function ($table){
            $table->foreign('customer_id')->references('id')->on('customers');
            $table->foreign('floor_agent_id')->references('staff_id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('returns');
    }
}
