<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddInventoryIdToProductTransfersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_transfers', function (Blueprint $table) {
            $table->dropForeign('product_transfers_product_id_foreign');
            $table->dropColumn('product_id');

            $table->unsignedInteger('inventory_id')->nullable()->index();
            $table->foreign('inventory_id')->references('id')->on('inventories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('product_transfers', function (Blueprint $table) {
            $table->unsignedInteger('product_id')->nullable()->index();
            $table->foreign('product_id')->references('id')->on('products');

            $table->dropForeign('product_transfers_inventory_id_foreign');
            $table->dropColumn('inventory_id');
        });
    }
}
