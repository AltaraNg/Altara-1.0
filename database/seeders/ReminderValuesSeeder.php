<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\ReminderValue;

class ReminderValuesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        ReminderValue::updateOrCreate(
            [
                'name' => 'first_message',
                'value' => ReminderValue::FIRST_MESSAGE
            ]
        );
        ReminderValue::updateOrCreate(
            [
                'name' => 'second_message',
                'value' => ReminderValue::SECOND_MESSAGE
            ]
        );
        ReminderValue::updateOrCreate(
            [
                'name' => 'third_message',
                'value' => ReminderValue::THIRD_MESSAGE
            ]
        );
        ReminderValue::updateOrCreate(
            [
                'name' => 'first_call',
                'value' => ReminderValue::FIRST_CALL
            ]
        );
        ReminderValue::updateOrCreate(
            [
                'name' => 'second_call',
                'value' => ReminderValue::SECOND_CALL
            ]
        );
        ReminderValue::updateOrCreate(
            [
                'name' => 'third_call',
                'value' => ReminderValue::THIRD_CALL
            ]
        );
        ReminderValue::updateOrCreate(
            [
                'name' => 'first_collection',
                'value' => ReminderValue::FIRST_COLLECTION
            ]
        );
        ReminderValue::updateOrCreate(
            [
                'name' => 'second_collection',
                'value' => ReminderValue::SECOND_COLLECTION
            ]
        );
        ReminderValue::updateOrCreate(
            [
                'name' => 'third_collection',
                'value' => ReminderValue::THIRD_COLLECTION
            ]
        );
        ReminderValue::updateOrCreate(
            [
                'name' => 'first_recovery',
                'value' => ReminderValue::FIRST_RECOVERY
            ]
        );
        ReminderValue::updateOrCreate(
            [
                'name' => 'second_recovery',
                'value' => ReminderValue::SECOND_RECOVERY
            ]
        );
        ReminderValue::updateOrCreate(
            [
                'name' => 'third_recovery',
                'value' => ReminderValue::THIRD_RECOVERY
            ]
        );
    }
}
