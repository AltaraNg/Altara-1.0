<?php


namespace App\Http\Filters;

use Carbon\Carbon;

class LateFeeFilter extends BaseFilter
{

    /**
     * @param bool $status
     */
    public function order($id)
    {
            $this->builder->where('order_id', $id);
    }

    public function customer($id)
    {
        $this->builder->whereHas('newOrder', function($q) use($id){
            $q->where('newOrder.customer_id', $id);
        });
    }

    /**
     * @param int $status
     */
    public function status($status)
    {
        $this->builder->where('status', $status);
    }

    /**
     * @param string $name
     */

}
