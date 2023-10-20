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
        Schema::create('customer_mobile_app_audits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('mobile_app_activity_id')->constrained('mobile_app_activities');
            $table->unsignedInteger('customer_id');
            $table->text('meta')->nullable();
            $table->foreign('customer_id')->references('id')->on('customers');
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
        Schema::dropIfExists('customer_mobile_app_audits');
    }
};
