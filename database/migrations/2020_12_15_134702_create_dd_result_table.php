<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDDResultTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dd_result', function (Blueprint $table) {
            $table->id();
            $table->string('order_id');
            $table->date('date');
            $table->date('next_try_date');
            $table->double('amount');
            $table->string('level');
            $table->string('status');
            $table->string('g_res')->nullable();
            $table->string('ref')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dd_result');
    }
}
