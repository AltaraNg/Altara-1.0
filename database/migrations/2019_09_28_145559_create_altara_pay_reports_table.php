<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAltaraPayReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('altara_pay_reports', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedInteger('check')->index()->nullable();
            $table->unsignedInteger('interest')->index()->nullable();
            $table->unsignedInteger('user_id')->index()->nullable();
            $table->unsignedInteger('branch_id')->index()->nullable();
            $table->string('date')->nullable();
            $table->timestamps();
        });
        Schema::table('altara_pay_reports', function ($table) {
            $table->engine = 'InnoDB';
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('branch_id')->references('id')->on('branches');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('altara_pay_reports');
    }
}
//php artisan migrate --path=/database/migrations/new folder/ 