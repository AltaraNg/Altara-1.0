<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInventoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventories', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('product_id')->index()->nullable();//FK
            $table->unsignedInteger('receiver_id')->index()->nullable();//FK
            $table->unsignedInteger('seller_id')->index()->nullable();//FK
            $table->string('inventory_sku');
            $table->string('serial_number');
            $table->string('market_price');

            $table->string('sold_date')->nullable();
            $table->string('received_date');
            $table->string('status')->nullable();

            $table->timestamps();
            $table->foreign('seller_id')->references('id')->on('users');
            $table->foreign('receiver_id')->references('id')->on('users');
            $table->foreign('product_id')->references('id')->on('products');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inventories');
    }
}
