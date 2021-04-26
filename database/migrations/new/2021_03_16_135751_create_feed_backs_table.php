<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFeedBacksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('feed_backs', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('todo_id')->unsigned()->nullable();
            $table->string('notes')->nullable();
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedInteger('reason_id');
            $table->foreign('reason_id')->references('id')->on('reasons');
            $table->foreign('todo_id')->references('id')->on('todos');
            $table->unsignedBigInteger('customer_id');
            $table->foreign('customer_id')->references('id')->on('contact_customers');
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
        Schema::dropIfExists('feed_backs');
    }
}
