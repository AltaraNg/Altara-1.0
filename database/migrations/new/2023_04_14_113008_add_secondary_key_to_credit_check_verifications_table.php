<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSecondaryKeyToCreditCheckVerificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('credit_checker_verifications', function (Blueprint $table) {
            $table->string('credit_check_no')->nullable()->index('credit_check_no_index');
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
            $table->dropColumn('credit_check_no');
        });
    }
}