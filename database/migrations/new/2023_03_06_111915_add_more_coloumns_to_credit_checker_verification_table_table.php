<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddMoreColoumnsToCreditCheckerVerificationTableTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('credit_checker_verifications', function (Blueprint $table) {
            $table->unsignedInteger('repayment_cycle_id')->nullable();
            $table->unsignedInteger('repayment_duration_id')->nullable();
            $table->unsignedInteger('down_payment_rate_id')->nullable();

            $table->foreign('repayment_cycle_id')->references('id')->on('repayment_cycles');
            $table->foreign('repayment_duration_id')->references('id')->on('repayment_durations');
            $table->foreign('down_payment_rate_id')->references('id')->on('down_payment_rates');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('credit_checker_verifications', function (Blueprint $table) {
            $table->dropForeign(['repayment_cycle_id', 'repayment_duration_id', 'down_payment_rate_id']);
        });
    }
}
