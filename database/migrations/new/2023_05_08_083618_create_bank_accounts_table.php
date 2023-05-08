<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBankAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bank_accounts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('bank_id');
            $table->unsignedInteger('customer_id');
            $table->unsignedInteger('verified_by');
            $table->string('account_name');
            $table->string('account_number');
            $table->boolean('is_verified');
            $table->date('verified_at');
            $table->timestamps();

            $table->foreign('bank_id')->references('id')->on('banks');
            $table->foreign('customer_id')->references('id')->on('customers');
            $table->foreign('verified_by')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bank_accounts');
    }
}
