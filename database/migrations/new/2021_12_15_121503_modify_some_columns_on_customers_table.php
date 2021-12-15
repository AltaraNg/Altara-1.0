<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ModifySomeColumnsOnCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('customers', function (Blueprint $table) {
            $table->string('what_product_do_you_need', 50)->nullable(true)->change();
            $table->string('what_do_you_need_it_for', 50)->nullable(true)->change();
            $table->string('number_of_children', 50)->nullable(true)->change();
            $table->string('loan_from_institution', 50)->nullable(true)->change();
            $table->string('did_you_pay_back', 50)->nullable(true)->change();
            $table->string('nextofkin_gender', 50)->nullable(true)->change();
            $table->string('nextofkin_work_duration', 50)->nullable(true)->change();
            $table->string('nextofkin_relationship', 50)->nullable(true)->change();
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
}
