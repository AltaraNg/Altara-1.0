<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::table('users', function ($table) {
          /*$table->string('guarantor_name')->after('next_of_kin_phone_no')->nullable();
          $table->string('guarantor_phone_no')->after('guarantor_name')->nullable();
          $table->string('guarantor_address')->after('guarantor_phone_no')->nullable();
          $table->string('guarantor_relationship')->after('guarantor_address')->nullable();*/

          $table->string('cv_url')->after('guarantor_relationship')->nullable();

       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
