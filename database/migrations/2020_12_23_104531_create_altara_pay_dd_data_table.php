<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAltaraPayDdDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('altara_pay_dd_data', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('customer_id');
            $table->string('order_id')->unique();
            $table->integer('sal_sug_date_1', false);
            $table->integer('sal_sug_date_2', false);
            $table->integer('sal_sug_date_3', false);
            $table->string('proof_of_salary_bank');
            $table->string('guarantor_signed');
            $table->string('address_visited');
            $table->string('credit_point');
            $table->string('credit_report');
            $table->string('mode');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('altara_pay_dd_data');
    }
}
