<?php

use App\Models\Tenant;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $tenant  = Tenant::query()->where('slug', 'altara')->first();
        if (!$tenant) {
            throw new Error("Please create a tenant name called 'altara' to proceed");
        }
        Schema::table('employees', function (Blueprint $table) use ($tenant){
            $table->foreignId('tenant_id')->default($tenant->id)->constrained('tenants');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->dropConstrainedForeignId('tenant_id');
        });
    }
};
