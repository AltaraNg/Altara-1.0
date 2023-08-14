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
        Schema::create('bank_statements', function (Blueprint $table) {
            $table->id();
            $table->string('account_name')->nullable();
            $table->string('account_number')->nullable();
            $table->decimal('opening_balance')->nullable();
            $table->decimal('closing_balance', 12)->nullable();
            $table->decimal('total_deposit', 12)->nullable();
            $table->decimal('total_withdrawal', 12)->nullable();
            $table->string('salary_predictions_file_url')->nullable();
            $table->string('exported_bank_statement_file_url')->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
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
        Schema::dropIfExists('bank_statements');
    }
};
