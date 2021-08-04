<?php
/**
 * @class: ResponseCodes
 * @namespace: App\Helper
 *
 * @author: Adeniyi
 */

namespace App\Helper;


class ResponseCodes
{
    // System and Generic Errors
    const INVALID_REQUEST = 1;
    const SESSION_ID_REQUIRED = 2;
    const EXCEPTION_THROWN = 4;
    const INVALID_PARAM = 5;
    const INCOMPLETE_PARAM = 6;
    const ACTION_FAILED = 7;
    const RESOURCE_NOT_FOUND = 8;
    const FAILED_VALIDATION = 9;
    const RESOURCE_AUTHORISATION_ERROR = 10;
    const REQUEST_NOT_PERMITTED = 11;
    const ROUTE_NOT_FOUND = 12;
    const UNABLE_TO_PROCESS = 13;
    const TEST_MODE_ONLY = 14;

    // Other Errors
    const LOGIN_FAIL = 101;
    const USER_WITH_EMAIL_EXIST = 130;
    const USER_NOT_EXIST = 131;
    const PASSWORD_MISMATCH = 133;
    const TOKEN_VERIFICATION_FAIL = 147;
    const PROVIDER_NOT_SUPPORTED = 148;

    const ACTION_SUCCESSFUL = 200;
    const CREATED = 201;
    const ACCEPTED = 202;

    const MOVED_PERMANENTLY = 301;
    const FOUND = 302;

    const BAD_REQUEST = 400;
    const UNAUTHENTICATED = 401;
    const PERMISSION_DENIED = 403;
    const NOT_FOUND = 404;
    const METHOD_NOT_ALLOWED = 405;
    const UNPROCESSABLE_ENTITY = 422;


}
