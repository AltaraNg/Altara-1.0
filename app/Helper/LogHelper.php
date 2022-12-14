<?php
namespace App\Helper;

use App\Services\MailService;
use Illuminate\Support\Facades\Log;
use Symfony\Component\ErrorHandler\ErrorRenderer\HtmlErrorRenderer;
use Symfony\Component\ErrorHandler\Exception\FlattenException;


/**
 * LogHelper assists in writing log messages to file and sending emails.
 *
 * @author Oyelaking
 */
class LogHelper
{

    /**
     * Log the error to the log file and send an error message.
     *
     * @param string $message
     * @param $exception
     */
    public static function error(string $message, $exception)
    {
        Log::error($message, ['message' => $exception->getMessage()]);
        self::sendErrorMail($message, $exception);
    }

    /**
     * Log the info to file.
     *
     * @param string $message
     * @param mixed ...$contextData
     */
    public static function info(string $message, ...$contextData)
    {
        Log::info($message, $contextData);
    }

    /**
     * Send error mail.
     *
     * @param string $errorMessage
     * @param $exception
     * @return void
     */
    public static function sendErrorMail(string $errorMessage, $exception)
    {
        //send error mail if it's not local
        if (env('APP_ENV') == 'local') {
            return;
        }

        try {
            $e = FlattenException::create($exception);

            $handler = new HtmlErrorRenderer(true);

            $html = $handler->getBody($e);
            MailService::send('log_error',  config('app.technology_email'), ['errorMessage' => $errorMessage, 'smDump' => $html]);
        } catch (\Exception $ex) {
            Log::error($ex->getMessage(), ['error' => $ex]);
        }
    }
}
