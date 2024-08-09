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
        Schema::create('client_customer_collections', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tenant_id')->index();
            $table->unsignedBigInteger('uploaded_by_id')->index();
            $table->text('uploaded_file_url');
            $table->integer('total_rows')->default(0);
            $table->integer('number_of_rows_processed')->default(0);
            $table->integer('number_of_rows_failed')->default(0);
            $table->text('processed_rows')->nullable();
            $table->text('failed_rows')->nullable();
            $table->text('error')->nullable();
            $table->text('exception_stack_trace')->nullable();
            $table->string('status')->default('pending');
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
        Schema::dropIfExists('client_customer_collections');
    }
};
