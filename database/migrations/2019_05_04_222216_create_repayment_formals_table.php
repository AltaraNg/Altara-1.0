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
        Schema::create('repayment_formals', function (Blueprint $table) {
            $table->string('repayment_id')->primary();
            $table->date('date_of_last_payment');
            $table->date('date_of_next_payment');
            $table->date('1st_date');
            $table->date('2nd_date');
            $table->date('3rd_date');
            $table->date('4th_date');
            $table->date('5th_date');
            $table->date('6th_date');
            $table->double('1st_pay',10,2);
            $table->double('2nd_pay',10,2);
            $table->double('3rd_pay',10,2);
            $table->double('4th_pay',10,2);
            $table->double('5th_pay',10,2);
            $table->double('6th_pay',10,2);
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
        Schema::dropIfExists('repayment_formals');
    }
}
