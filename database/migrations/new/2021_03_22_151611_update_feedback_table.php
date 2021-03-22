<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateFeedbackTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('feed_backs', function (Blueprint $table) {
            //
            $table->dropColumn('feedback');
            $table->unsignedBigInteger('customer_id');
            $table->foreign('customer_id')->references('id')->on('contact_customers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('feed_backs', function (Blueprint $table) {
            //
            $table->dropForeign('feed_backs_customer_id_foreign');
            $table->dropColumn('customer_id');
            $table->text('feedback');
        });
    }
}
