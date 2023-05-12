<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddBusinessTypeIdOnCreditCheckVerificationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('credit_checker_verifications', function (Blueprint $table) {
            $table->unsignedInteger('business_type_id')->nullable();
            $table->foreign('business_type_id', 'business_type_id')->references('id')->on('business_types');
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
            $table->dropColumn('business_type_id');
        });
    }
}
