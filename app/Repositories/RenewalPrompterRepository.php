<?php

namespace App\Repositories;

use App\RenewalPrompter;

class RenewalPrompterRepository extends Repository
{
    public function model()
    {
        return RenewalPrompter::class;
    }

    public function renewalQuery($filter)
    {
        return $this->model::filter($filter);
    }
}
