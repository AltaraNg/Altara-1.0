<?php

namespace App\Services;

use Carbon\Carbon;
use App\Models\CreditCheckerVerification;

class CreditCheckerVerificationService
{
    public function updateCreditCheckerVerificationStatus(int $user_id,string $status = null, string $reason = null,  CreditCheckerVerification $creditCheckerVerification)
    {
        $creditCheckerVerification->status = $status;
        $creditCheckerVerification->reason = $reason ?? $creditCheckerVerification->reason;
        $creditCheckerVerification->processed_by =  $user_id;
        $creditCheckerVerification->processed_at = Carbon::now();
        $creditCheckerVerification->update();
        return $creditCheckerVerification->fresh();
    }
    public function allCreditCheckerVerification(string $creditCheckType, string $status = null)
    {
        $query =  CreditCheckerVerification::query()
        ->search()
        ->when($status, function ($query) use ($status) {
            $query->where('status', $status);
        })->when($creditCheckType == "loan", function ($query) {
            $query->where('product_id', '<>' , null);
        })->when($creditCheckType == "bnpl", function ($query) {
            $query->where('bnpl_vendor_product_id', '<>' , null);
        })
        ->with('bnplProduct', 'vendor', 'documents', 'product')->with(['customer' => function($q){
            $q->with('guarantors');
        }]);

    
        $creditCheckerVerifications = $query->latest('created_at')->paginate(request('per_page', 15));
        return $creditCheckerVerifications;
    }
}
