<?php

use App\RenewalPrompterStatus;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRenewalPrompterStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('renewal_prompter_statuses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 191);
            $table->boolean('status')->default(true);
            $table->timestamps();
        });
        RenewalPrompterStatus::truncate();
        $statuses = ['contacted', 'interested', 'renewed', 'not contacted'];
        foreach ($statuses as $status) {
            RenewalPrompterStatus::create([
                'name' => $status
            ]);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('renewal_prompter_statuses');
    }
}
