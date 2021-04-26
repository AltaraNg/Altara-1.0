<?php

namespace App\Repositories;

use App\Feedback;

class FeedbackRepository extends Repository
{

    public function model()
    {
        return Feedback::class;
    }
}
