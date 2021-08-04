<?php
/**
 * @class: ResponseMessage
 * @namespace: App\Helper
 *
 * @author: Adeniyi
 */

namespace App\Helper;


class ResponseMessages
{
    const INVALID_REQUEST = 'Invalid Request.';
    const SESSION_ID_REQUIRED = 'Session Id is required.';
    const NOT_FOUND = 'Searched term not found.';
    const EXCEPTION_THROWN = 'Oops, an error occurred, we are fixing it. Please try again later.';
    const INVALID_PARAM = 'One or more of the parameters entered is incorrect.';
    const INCOMPLETE_PARAM = "One or more required parameters are missing.";
    const ACTION_FAILED = "Requested action failed.";
    const RESOURCE_NOT_FOUND = "Requested resource could not be located,";
    const FAILED_VALIDATION = "The given data failed to pass validation.";
    const RESOURCE_AUTHORISATION_ERROR = "You do not have access to this resource.";
    const REQUEST_NOT_PERMITTED = 'The requested request is not permitted. Log out or Login to proceed.';
    const ROUTE_NOT_FOUND = 'The action/route you are requesting does not exist';
    const UNABLE_TO_PROCESS = 'We are currently unable to process your request. Please try again later.';
    const TEST_MODE_ONLY = "Action can only be accessed in test mode.";

    const LOGIN_FAIL = 'Email and password does not match.';
    const USER_NOT_LOGGED_IN = 'You are not logged in. Please login or create an account to proceed.';
    const INVALID_CONTACT_METHOD = 'Contact method selected is not valid';

    const USER_WITH_EMAIL_EXIST = 'This email already exists in the system.';
    const USER_NOT_EXIST = 'User with this email does not exist. Kindly register to proceed.';
    const PASSWORD_MISMATCH = 'The password you have entered does not match.';
    const INVALID_TRANSACTION = "This transaction is already performed";
    const UNSUCCESSFUL_PAYMENT = "Payment was not successful";
    const TOKEN_VERIFICATION_FAIL = 'Token can not be verified';
    const ACTION_SUCCESSFUL = 'Requested action is successfully performed';
    const CONTACT_METHOD_NOT_SELECTED = "You have not selected contact method";


    public static function NotFound($resource)
    {
        return "Sorry, the $resource cannot be found.";

    }
}
