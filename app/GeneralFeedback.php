<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GeneralFeedback extends Model
{
    //
    protected $guarded = [];
    protected $casts = ['data' => 'array'];
    protected  $table = 'general_feedbacks';
    /**
     * Get the parent feedbackable model (user or post).
     */
    public function generalFeedbackAble()
    {
        return $this->morphTo('generalFeedbackAble','general_feedback_able_type', 'general_feedback_able_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }
    public function reason()
    {
        return $this->belongsTo(GeneralReason::class, 'reason_id');
    }

    public function toArray()
    {
        return [
            'reason' => $this->reason->reason ?? '',
            'created_by' => $this->user->full_name ?? '',
            'others' => $this->data,
            'feedback' => $this->feedback,
            'follow_up_date' => $this->follow_up_date,
            'new_order_id' => $this->general_feedback_able_id,
            'created_at' => $this->created_at->format('Y-m-d H:m:i')
        ];
    }
}
