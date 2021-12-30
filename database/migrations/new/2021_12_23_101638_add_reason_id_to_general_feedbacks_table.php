<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddReasonIdToGeneralFeedbacksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('general_feedbacks', function (Blueprint $table) {
            $table->unsignedInteger('reason_id')->nullable();
            $table->foreign('reason_id')->references('id')->on('general_reasons');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('general_feedbacks', function (Blueprint $table) {
            $table->dropColumn('reason_id');
        });
    }
}
