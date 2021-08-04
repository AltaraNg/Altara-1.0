<?php

namespace App\Exceptions;

use App\Helper\ResponseCodes;
use App\Helper\ResponseHelper;
use App\Helper\ResponseMessages;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Exception;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *=
     * @param Exception $e
     * @return void=
     * @throws Exception
     */
    public function report(Exception $e)
    {
        parent::report($e);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param Request $request
     * @param Exception $e
     * @return Response
     */
    public function render($request, Exception $e)
    {
        if ($e instanceof AException) {
            return ResponseHelper::createErrorResponse($e->getMessage(), $e->getCode(), [
                'errors' => $e->getErrorMessages()
            ]);
        } elseif ($e instanceof ValidationException) {//handle validation errors
            $data = ["errors" => $e->validator->getMessageBag()->getMessages()];
            return ResponseHelper::createErrorResponse(ResponseMessages::FAILED_VALIDATION, ResponseCodes::FAILED_VALIDATION, $data, ResponseCodes::UNPROCESSABLE_ENTITY);
        } elseif ($e instanceof ModelNotFoundException) {
            return ResponseHelper::createErrorResponse(
                ResponseMessages::RESOURCE_NOT_FOUND, ResponseCodes::RESOURCE_NOT_FOUND
            );
        } elseif ($e instanceof MethodNotAllowedHttpException) {
            return ResponseHelper::createErrorResponse(
                ResponseMessages::ROUTE_NOT_FOUND, ResponseCodes::ROUTE_NOT_FOUND, [], 404
            );
        } elseif ($e instanceof AuthenticationException) {
            return ResponseHelper::createErrorResponse($e->getMessage(), ResponseCodes::RESOURCE_AUTHORISATION_ERROR, [], ResponseCodes::UNAUTHENTICATED);
        } else {
            return ResponseHelper::createErrorResponse(
                ResponseMessages::EXCEPTION_THROWN, ResponseCodes::EXCEPTION_THROWN,
                [
                    "error_message" => $e->getMessage()
                ], 400
            );
        }
    }
}
