<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRepaymentInformalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('repayment_informal', function (Blueprint $table) {

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
            $table->date('7th_date')->nullable();
            $table->date('8th_date')->nullable();
            $table->date('9th_date')->nullable();
            $table->date('10th_date')->nullable();
            $table->date('11th_date')->nullable();
            $table->date('12th_date')->nullable();

            $table->double('1st_pay',10,2)->nullable();
            $table->double('2nd_pay',10,2)->nullable();
            $table->double('3rd_pay',10,2)->nullable();
            $table->double('4th_pay',10,2)->nullable();
            $table->double('5th_pay',10,2)->nullable();
            $table->double('6th_pay',10,2)->nullable();
            $table->double('7th_pay',10,2)->nullable();
            $table->double('8th_pay',10,2)->nullable();
            $table->double('9th_pay',10,2)->nullable();
            $table->double('10th_pay',10,2)->nullable();
            $table->double('11th_pay',10,2)->nullable();
            $table->double('12th_pay',10,2)->nullable();

            $table->unsignedInteger('1st_payment_method')->nullable();
            $table->unsignedInteger('2nd_payment_method')->nullable();
            $table->unsignedInteger('3rd_payment_method')->nullable();
            $table->unsignedInteger('4th_payment_method')->nullable();
            $table->unsignedInteger('5th_payment_method')->nullable();
            $table->unsignedInteger('6th_payment_method')->nullable();
            $table->unsignedInteger('7th_payment_method')->nullable();
            $table->unsignedInteger('8th_payment_method')->nullable();
            $table->unsignedInteger('9th_payment_method')->nullable();
            $table->unsignedInteger('10th_payment_method')->nullable();
            $table->unsignedInteger('11th_payment_method')->nullable();
            $table->unsignedInteger('12th_payment_method')->nullable();

            $table->unsignedInteger('1st_payment_bank')->nullable();
            $table->unsignedInteger('2nd_payment_bank')->nullable();
            $table->unsignedInteger('3rd_payment_bank')->nullable();
            $table->unsignedInteger('4th_payment_bank')->nullable();
            $table->unsignedInteger('5th_payment_bank')->nullable();
            $table->unsignedInteger('6th_payment_bank')->nullable();
            $table->unsignedInteger('7th_payment_bank')->nullable();
            $table->unsignedInteger('8th_payment_bank')->nullable();
            $table->unsignedInteger('9th_payment_bank')->nullable();
            $table->unsignedInteger('10th_payment_bank')->nullable();
            $table->unsignedInteger('11th_payment_bank')->nullable();
            $table->unsignedInteger('12th_payment_bank')->nullable();

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
        Schema::dropIfExists('repayment_informal');
    }
}
