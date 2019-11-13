<?php

namespace App\Helper;

use phpDocumentor\Reflection\Types\Boolean;

trait ExtractRequestObject
{
    public function extractRequestObject($requestObj)
    {
        return [
            'list' => $requestObj['list'],
            'page' => $requestObj['page'],
            'dateTo' => $requestObj['dateTo'],
            'dateFrom' => $requestObj['dateFrom'],
            'pageSize' => $requestObj['pageSize'],
            'branchId' => $requestObj['branchId'],
            'overdueDays' => $requestObj['overdueDays'],
            'direct-debit' => $requestObj['direct-debit'],
            'filterWithBranch' => $requestObj['filterWithBranch']
        ];
    }
}
