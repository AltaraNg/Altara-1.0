<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePriceCalculatorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('price_calculators', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('business_type_id')->index();
            $table->unsignedInteger('down_payment_rate_id')->index();
            $table->unsignedInteger('repayment_duration_id')->index();
            $table->string('label')->unique();
            $table->float('margin');
            $table->float('interest');
            $table->float('tax');
            $table->boolean('status')->default(1);
            $table->timestamps();

            $table->foreign('business_type_id')->references('id')->on('business_types');
            $table->foreign('down_payment_rate_id')->references('id')->on('down_payment_rates');
            $table->foreign('repayment_duration_id')->references('id')->on('repayment_durations');

            $table->unique(['business_type_id', 'down_payment_rate_id', 'repayment_duration_id'], 'bt_dp_rp_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('price_calculators');
    }
}
