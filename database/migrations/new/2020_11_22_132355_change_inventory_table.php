<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeInventoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('inventories', function (Blueprint $table) {
            $table->dropColumn('is_active');
            $table->unsignedInteger('inventory_status_id')->nullable()->index();
            $table->foreign('inventory_status_id')->references('id')->on('inventory_statuses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('inventories', function (Blueprint $table) {
            $table->boolean('is_active')->default(1);
            $table->dropForeign('inventories_inventory_status_id_foreign');
            $table->dropColumn('inventory_status_id');
        });
    }
}
