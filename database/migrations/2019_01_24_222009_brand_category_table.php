<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class BrandCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('brand_category', function (Blueprint $table) {
          $table->engine = 'InnoDB';
          $table->increments('id');
          $table->unsignedInteger('brand_id')->index()->nullable();
          $table->unsignedInteger('category_id')->index()->nullable();
       });

       Schema::table('brand_category', function ($table) {
          $table->engine = 'InnoDB';
          $table->foreign('brand_id')->references('id')->on('brands')->onDelete('cascade');
          $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
       });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       Schema::dropIfExists('brand_category');
    }
}
