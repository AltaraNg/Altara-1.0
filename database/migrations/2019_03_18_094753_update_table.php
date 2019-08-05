<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class UpdateTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /*Schema::table('users', function ($table) {
            $table->string('guarantor_name')->after('next_of_kin_phone_no')->nullable();
            $table->string('guarantor_phone_no')->nullable();
            $table->string('guarantor_address')->nullable();
            $table->string('guarantor_relationship')->nullable();
            $table->string('guarantor_name_2')->nullable();
            $table->string('guarantor_phone_no_2')->nullable();
            $table->string('guarantor_address_2')->nullable();
            $table->string('guarantor_relationship_2')->nullable();
            $table->string('cv_url')->after('guarantor_relationship_2')->nullable();
        });


        Schema::table('dsa_daily_registration', function ($table) {
            $table->dropForeign(['captain_id']);
            $table->foreign('captain_id')
                ->references('staff_id')
                ->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });


        Schema::table('logs', function ($table) {
            $table->dropForeign(['staff_id']);
            $table->foreign('staff_id')
                ->references('staff_id')
                ->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });*/

        /*Schema::table('branches', function ($table) {
            $table->string('category')->after('status');
        });*/

        Schema::table('customers', function ($table) {
            $table->string('occupation')->nullable()->after('civil_status');
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
