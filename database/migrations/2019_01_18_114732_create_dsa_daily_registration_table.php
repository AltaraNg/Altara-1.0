<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDsaDailyRegistrationTable extends Migration
{
   /**
    * Run the migrations.
    *
    * @return void
    */
   public function up()
   {
      Schema::create('dsa_daily_registration', function (Blueprint $table) {
         $table->engine = 'InnoDB';
         $table->increments('id');
         $table->unsignedInteger('user_id')->index()->nullable();
         $table->string('captain_id', 30);
         $table->unsignedInteger('branch_id')->index()->nullable();
         $table->string('date');
         $table->string('number_on_portal');
         $table->string('number_to_captain');
         $table->string('remark');
         $table->timestamps();
      });
      Schema::table('dsa_daily_registration', function ($table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('captain_id')->references('staff_id')->on('users');
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
      Schema::dropIfExists('dsa_daily_registration');
   }
}
