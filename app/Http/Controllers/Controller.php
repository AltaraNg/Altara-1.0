<?php

namespace App\Http\Controllers;

use App\Helper\ResponseHelper;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * @param array $data
     * @param string $message
     * @return Response
     */
    public function sendSuccess(array $data, $message = '')
    {
        return ResponseHelper::createSuccessResponse($data, $message);
    }

    /**
     * @param $message
     * @param $error_code
     * @param array $data
     * @param int $http_response_code
     * @return Response
     */
    public function sendError($message, $error_code, array $data = [], $http_response_code = 401)
    {
        return ResponseHelper::createErrorResponse($message, $error_code, $data, $http_response_code);
    }
}
