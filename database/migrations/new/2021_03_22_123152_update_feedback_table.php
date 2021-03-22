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
        Schema::create('reasons', function (Blueprint $table) {
            $table->increments('id');
            $table->string('reason')->unique();
            $table->boolean('is_active');
            $table->timestamps();
        });

        Schema::table('feed_backs', function (Blueprint $table) {
            //
            $table->dropForeign('feed_backs_todo_id_foreign');
            $table->dropColumn('todo_id');
            $table->string('notes')->nullable();
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedInteger('reason_id');
            $table->foreign('reason_id')->references('id')->on('reasons');
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
            $table->unsignedInteger('todo_id');
            $table->foreign('todo_id')->references('id')->on('todos');
            $table->dropForeign('feed_backs_user_id_foreign');
            $table->dropColumn('user_id');
            $table->dropForeign('feed_backs_reason_id_foreign');
            $table->dropColumn('reason_id');
        });

        Schema::dropIfExists('reasons');
    }
}
