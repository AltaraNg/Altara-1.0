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

            $table->date('1st_date');
            $table->date('2nd_date');
            $table->date('3rd_date');
            $table->date('4th_date');
            $table->date('5th_date');
            $table->date('6th_date');
            $table->date('7th_date');
            $table->date('8th_date');
            $table->date('9th_date');
            $table->date('10th_date');
            $table->date('11th_date');
            $table->date('12th_date');

            $table->double('1st_pay',10,2);
            $table->double('2nd_pay',10,2);
            $table->double('3rd_pay',10,2);
            $table->double('4th_pay',10,2);
            $table->double('5th_pay',10,2);
            $table->double('6th_pay',10,2);
            $table->double('7th_pay',10,2);
            $table->double('8th_pay',10,2);
            $table->double('9th_pay',10,2);
            $table->double('10th_pay',10,2);
            $table->double('11th_pay',10,2);
            $table->double('12th_pay',10,2);

            $table->unsignedInteger('1st_payment_method');
            $table->unsignedInteger('2nd_payment_method');
            $table->unsignedInteger('3rd_payment_method');
            $table->unsignedInteger('4th_payment_method');
            $table->unsignedInteger('5th_payment_method');
            $table->unsignedInteger('6th_payment_method');
            $table->unsignedInteger('7th_payment_method');
            $table->unsignedInteger('8th_payment_method');
            $table->unsignedInteger('9th_payment_method');
            $table->unsignedInteger('10th_payment_method');
            $table->unsignedInteger('11th_payment_method');
            $table->unsignedInteger('12th_payment_method');

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
