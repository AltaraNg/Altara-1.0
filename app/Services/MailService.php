<?php

namespace App\Services;

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

/**
 * A service class for sending mails.
 * Contain a method for sending abandoned cart
 * which require the cart object.
 *
 * @package App\Services
 */
class MailService
{


    /**
     * @param string $reportDescription
     * @param array $reports
     * @param array $recipients
     * @param string $reportHeader
     * @param string $template
     * @param string $subject
     * @return bool
     */
    public function sendReportAsMail(string $reportDescription, array $reports,
                                     array $recipients, string $reportHeader, string $template, string $subject='')
    {
        $data = [
            'reportDescription' => $reportDescription,
            'reports' => $reports,
            'reportHeader' => $reportHeader,
            'subject' => $subject
        ];

        return $this->send($template, $recipients , $data);
    }


    /**
     * @param string $template
     * @param $recipients
     * @param array $data
     * @return bool
     */
    public function send(string $template, $recipients, array $data = [])
    {
        $mailTemplate = app()->make('App\Mail\\' . Str::studly($template), ['data' => $data]);
        Mail::to($recipients)
            ->bcc(config('app.technology_email'))
            ->send($mailTemplate);
        return true;
    }
}

