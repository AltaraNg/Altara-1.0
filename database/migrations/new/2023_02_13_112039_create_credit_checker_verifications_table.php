<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCreditCheckerVerificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('credit_checker_verifications', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('customer_id')->nullable();
            $table->unsignedInteger('initiated_by')->nullable(); // the user that initiated th credit checking, could be a vendor or any user
            $table->unsignedInteger('processed_by')->nullable(); // the user that acted on this particular verification
            $table->dateTime('processed_at')->nullable();
            $table->string('status')->default('pending');  // pending, verified, rejected
            $table->text('reason')->nullable(); // on situations the credit checker decides to not approve it, credit checker may provide a reason
            $table->timestamps();

            $table->foreign('customer_id')->references('id')->on('customers');
            $table->foreign('initiated_by')->references('id')->on('users');
            $table->foreign('processed_by')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('credit_checker_verifications');
    }
}
