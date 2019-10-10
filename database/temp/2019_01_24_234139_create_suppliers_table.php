<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuppliersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('suppliers', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');//PK
            $table->integer('user_id')->unsigned();//FK
            $table->string('sku');
            $table->string('name');
            $table->text('address');
            $table->string('phone_number')->unique();
            $table->string('email')->unique();
            $table->integer('status');
            $table->string('contact_person_name');
            $table->string('bank_account_name');
            $table->string('bank_account_no');
            $table->string('bank_name');
            $table->string('date_of_reg');
            $table->timestamps();
        });

        Schema::table('suppliers', function ($table) {
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('suppliers');
    }
}
