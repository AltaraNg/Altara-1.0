<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBrandCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('brand_category', function (Blueprint $table) {
           $table->unsignedInteger('brand_id')->index();
           $table->foreign('brand_id')->references('id')->on('brands');
           $table->unsignedInteger('category_id')->index();
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
       Schema::dropIfExists('brand_category');
    }
}
