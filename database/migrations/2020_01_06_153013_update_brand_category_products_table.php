<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateBrandCategoryProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
//        Schema::table('brands', function (Blueprint $table){
//            $table->boolean('is_available');
//        });
//        Schema::table('categories', function(Blueprint $table){
//            $table->boolean('is_available');
//        });
        Schema::table('suppliers', function(Blueprint $table){
            $table->dropColumn('status');

        });
        Schema::table('suppliers', function (Blueprint $table){
            $table->boolean('status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
