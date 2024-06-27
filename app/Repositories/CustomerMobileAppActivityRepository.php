<?php

namespace App\Repositories;

use App\Models\CustomerMobileAppAudit;

class CustomerMobileAppActivityRepository extends Repository
{
    /**
     * Specify Model class name
     * @return mixed
     */
    public function model()
    {
        return CustomerMobileAppAudit::class;
    }
}
