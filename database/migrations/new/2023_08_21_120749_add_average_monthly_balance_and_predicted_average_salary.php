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
        Schema::table('bank_statements', function (Blueprint $table) {
            $table->decimal('predicted_average_salary', 12)->nullable();
            $table->decimal('average_monthly_balance', 12)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bank_statements', function (Blueprint $table) {
            $table->dropColumn('predicted_average_salary');
            $table->dropColumn('average_monthly_balance');
        });
    }
};
