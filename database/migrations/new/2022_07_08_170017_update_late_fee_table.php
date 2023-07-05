<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateLateFeeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('late_fees', function (Blueprint $table) {
            $table->decimal('amount_paid', 8, 2)->nullable(false)->default(0);
            $table->renameColumn('amount', 'amount_due');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('late_fees', function (Blueprint $table) {
            //
            $table->dropColumn('amount_paid');
            $table->renameColumn('amount_due', 'amount');
        });
    }
}
