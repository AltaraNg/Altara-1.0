<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('customers', function (Blueprint $table) {
            $table->foreignId('tenant_id')->default(1)->nullable()->constrained('tenants')->nullOnDelete();
            $table->string('other_phone_numbers')->nullable();
            $table->string('custom_customer_id')->index()->nullable();
        });
        Schema::table('new_orders', function (Blueprint $table) {
            $table->string('custom_order_number')->index()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('customers', function (Blueprint $table) {
            //
        });
    }
};
