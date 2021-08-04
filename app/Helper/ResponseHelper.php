<?php
/**
 * Created by PhpStorm.
 * User: Adeniyi
 * Date: 06/04/2020
 * Time: 1:27 PM
 */

namespace App\Helper;

use Illuminate\Http\Response;

/**
 * Class ResponseHelper is a helper class that helps with creating responses
 * for the JSON API. It's benefit include providing a single-point-of-change and uniformity
 * across all entities that return a response(such as controllers and middlewares).
 */
class ResponseHelper
{

    const STATUS_SUCCESS = "success";
    const STATUS_ERROR = "error";

    public static function createSuccessResponse(array $data, string $message = ResponseMessages::ACTION_SUCCESSFUL, array $headers = []): Response
    {
        return self::createResponse(self::STATUS_SUCCESS, $data, $message, 0, 200, $headers);
    }

    public static function createResponse(
        string $status = self::STATUS_SUCCESS,
        array $data = [],
        string $message = "",
        int $code = 0,
        int $httpResponseCode = 200,
        array $headers = []
    ): Response {
        $responseData = [
            'status' => $status,
            'data' => $data,
            'message' => $message
        ];
        if (!empty($code)) {
            $responseData['code'] = $code;
        }

        $header    = [
            'Access-Control-Allow-Origin'      => self::getOrigin(),
            'Access-Control-Allow-Credentials' => 'true',
            'Access-Control-Allow-Methods'     => 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers'     => 'X-Requested-With, Content-Type, Origin, Authorization'
        ];
        return \response($responseData, $httpResponseCode)->withHeaders($header);
    }

    /**
     * Returns the origin for the request. It just spits back whatever Origin
     * request the request specifies or generates one from the $_SERVER info
     * if no Origin header is specified for the request.
     *
     * @return string the origin of the request
     */
    public static function getOrigin(){
        if(request()->headers->get('Origin')){
            return request()->headers->get('Origin');
        }
        $server = request()->server;
        $origin = $server->get('REQUEST_SCHEME') . "://" . $server->get('HTTP_HOST')
                . ":" . $server->get('REMOTE_PORT');
        return $origin;
    }

    public static function createErrorResponse(
        $message,
        $errorCode,
        array $data = [],
        $httpResponseCode = 401
    ): Response {
        return self::createResponse(self::STATUS_ERROR, $data, $message, $errorCode, $httpResponseCode);
    }

}
