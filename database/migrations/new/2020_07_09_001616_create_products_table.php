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
          $table->increments('id');
          $table->string('name');
          $table->unsignedInteger('brand_id')->index();
          $table->unsignedInteger('category_id')->index();
          $table->string('retail_price');
          $table->string('img_url')->nullable();
          $table->string('feature');
          $table->string('product_type_id');
          $table->boolean('is_active')->default(1);
          $table->unsignedInteger('user_id')->index();
          $table->timestamps();

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
