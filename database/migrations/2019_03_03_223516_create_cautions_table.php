<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCautionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cautions', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedInteger('issuer_id')->index()->nullable();
            $table->unsignedInteger('user_id')->index()->nullable();
            $table->text('reason');
            $table->string('penalty');
            $table->string('date');
            $table->timestamps();
        });

        Schema::table('cautions', function ($table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('issuer_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cautions');
    }
}
