<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DDResponsesTable extends Migration
{
    public function up()
    {
        Schema::create('dd_responses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('customer_id');
            $table->string('customer_name');
            $table->string('branch');
            $table->string('order_id');
            $table->date('order_date');
            $table->string('business_type');
            $table->decimal('amount', 10, 2);
            $table->string('bank')->nullable();
            $table->string('status');
            $table->text('statusMessage')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('dd_responses');
    }
}
