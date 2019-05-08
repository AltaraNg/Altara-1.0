<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRepaymentFormalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('repayment_formal', function (Blueprint $table) {

            $table->engine = 'InnoDB';

            $table->string('repayment_id')->primary();

            $table->date('date_of_last_payment');
            $table->date('date_of_next_payment');

            $table->date('1st_date')->nullable();
            $table->date('2nd_date')->nullable();
            $table->date('3rd_date')->nullable();
            $table->date('4th_date')->nullable();
            $table->date('5th_date')->nullable();
            $table->date('6th_date')->nullable();

            $table->double('1st_pay',10,2)->nullable();
            $table->double('2nd_pay',10,2)->nullable();
            $table->double('3rd_pay',10,2)->nullable();
            $table->double('4th_pay',10,2)->nullable();
            $table->double('5th_pay',10,2)->nullable();
            $table->double('6th_pay',10,2)->nullable();

            $table->unsignedInteger('1st_payment_method')->nullable();
            $table->unsignedInteger('2nd_payment_method')->nullable();
            $table->unsignedInteger('3rd_payment_method')->nullable();
            $table->unsignedInteger('4th_payment_method')->nullable();
            $table->unsignedInteger('5th_payment_method')->nullable();
            $table->unsignedInteger('6th_payment_method')->nullable();

            $table->unsignedInteger('1st_payment_bank')->nullable();
            $table->unsignedInteger('2nd_payment_bank')->nullable();
            $table->unsignedInteger('3rd_payment_bank')->nullable();
            $table->unsignedInteger('4th_payment_bank')->nullable();
            $table->unsignedInteger('5th_payment_bank')->nullable();
            $table->unsignedInteger('6th_payment_bank')->nullable();

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
        Schema::dropIfExists('repayment_formal');
    }
}
