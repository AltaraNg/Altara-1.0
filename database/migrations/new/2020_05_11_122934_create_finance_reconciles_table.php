<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFinanceReconcilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('finance_reconciles', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('payment_reconcile_id')->index();
            $table->foreign('payment_reconcile_id')->references('id')->on('payment_reconciles')->onDelete('cascade')->onUpdate('cascade');
            $table->double('bank_statement');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('finance_reconciles');
    }
}
