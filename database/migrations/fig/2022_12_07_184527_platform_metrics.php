<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PlatformMetrics extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('fig')->create('platform-metrics', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('key');
            $table->date('date');
            $table->float('value');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('platform_metrics', function (Blueprint $table) {
            //
        });
    }
}
