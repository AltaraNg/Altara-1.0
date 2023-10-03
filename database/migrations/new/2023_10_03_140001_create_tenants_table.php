<?php

use App\Models\Tenant;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('tenants')) {
            Schema::create('tenants', function (Blueprint $table) {
                $table->id();
                $table->string('name')->unique();
                $table->string('slug')->unique();
                $table->boolean('status')->default(true);
                $table->timestamps();
            });
        }
        
        $tenants = ['Altara', 'Oris'];
        foreach ($tenants as $key => $tenant) {
            Tenant::query()->updateOrCreate(
                ['slug' => Str::slug($tenant, '_')],
                [
                    'name' => $tenant
                ]
            );
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tenants');
    }
};
