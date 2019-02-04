<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuppliersTable extends Migration
{
   /**
    * Run the migrations.
    *
    * @return void
    */
   public function up()
   {
      Schema::create('suppliers', function (Blueprint $table) {
         $table->engine = 'InnoDB';
         $table->increments('id');
         $table->unsignedInteger('user_id')->index()->nullable();
         $table->unsignedInteger('category_id')->index()->nullable();
         $table->string('full_name');
         $table->text('address');
         $table->string('phone_number')->unique();
         $table->string('email')->unique();
         $table->string('date_of_reg');
         $table->integer('status');
         $table->string('contact_person_name');
         $table->timestamps();
      });

      Schema::table('suppliers', function ($table) {
         $table->foreign('user_id')->references('id')->on('users');
         $table->foreign('category_id')->references('id')->on('categories');
      });
   }

   /**
    * Reverse the migrations.
    *
    * @return void
    */
   public function down()
   {
      Schema::dropIfExists('suppliers');
   }
}
