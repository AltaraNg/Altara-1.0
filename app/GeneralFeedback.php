<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GeneralFeedback extends Model
{
    //
    protected $guarded = [];
    protected $casts = ['data' => 'array'];
    /**
     * Get the parent feedbackable model (user or post).
     */
    public function generalFeedbackAble()
    {
        return $this->morphTo('generalFeedbackAble','general_feedback_able_type', 'general_feedback_able_id');
    }

}
