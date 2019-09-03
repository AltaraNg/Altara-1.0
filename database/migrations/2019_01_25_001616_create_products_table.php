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
          $table->string('feature');
          $table->string('image_url');
          $status->boolean('status');
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
