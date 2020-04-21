<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
   /**
    * Run the migrations.
    *
    * @return void
    */
   public function up()
   {
      Schema::create('products', function (Blueprint $table) {
         $table->engine = 'InnoDB';
          $table->increments('id');//PK
          $table->string('name');
          $table->unsignedInteger('brand_id')->index()->nullable();//FK
          $table->unsignedInteger('category_id')->index()->nullable();//FK
          $table->string('retail_price');
<<<<<<<< HEAD
          $table->string('feature');
          $table->string('img_url');
========
          $table->string('features');
          $table->string('img_url');
          $table->string('popularity');
          $table->string('type');
>>>>>>>> 37a3a90a5b411ac82374f76bd8f9d192e7941125
          $table->boolean('is_active');
          $table->unsignedInteger('user_id')->index()->nullable();//FK
          $table->timestamps();

      });

      Schema::table('products', function ($table) {
         $table->foreign('user_id')->references('id')->on('users');
         $table->foreign('brand_id')->references('id')->on('brands');
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
      Schema::dropIfExists('products');
   }
}
