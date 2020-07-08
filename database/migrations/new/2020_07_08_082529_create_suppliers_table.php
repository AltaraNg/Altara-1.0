<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
            $table->increments('id');
            $table->string('name')->index()->unique();
            $table->text('address');
            $table->string('city');
            $table->string('state');
            $table->string('phone_number')->unique();
            $table->string('email')->unique();
            $table->boolean('is_active')->default(1);
            $table->string('contact_person_name');
            $table->string('bank_account_name');
            $table->string('bank_account_no');
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
        Schema::dropIfExists('suppliers');
    }
}
