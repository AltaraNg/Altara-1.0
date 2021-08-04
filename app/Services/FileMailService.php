<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

/**
 * FileMailService is a service that makes saving of mails to file on the file
 * system easy.
 *
 * @author Adeniyi
 */
class FileMailService
{

    const STORAGE_DISK = "mail";

    /**
     * Save mail to file
     *
     * @param string $body
     * @param string $subject
     * @param array $to
     * @param array $from
     * @param array $replyTo
     * @param array $cc
     * @param array $bcc
     */
    public function saveMailToFile(string $body, string $subject,
                                   array $to
        , array $from, array $replyTo = [], array $cc = [], array $bcc = [],
                                   array $sender = [])
    {
        $filename = $this->generateFileName();
        $content = $this->generateFileContent(array_combine([
            'body', 'subject', 'to', 'from', 'replyTo', 'cc', 'bcc', 'sender'
        ], func_get_args()));
        Storage::disk(self::STORAGE_DISK)->put($filename, $content);
        return count($to) + count($bcc) + count($cc);
    }

    /**
     * Create a unique file name for this email.
     *
     * @param string $prefix
     * @return string
     */
    protected function generateFileName(string $prefix = "")
    {
        return $prefix ?: uniqid() . "_" . date("Y-m-d H.i.s") . ".html";
    }

    /**
     * Generate the content to be saved to file.
     *
     * @param array $args variable argument
     * @return string the file content
     */
    protected function generateFileContent(array $args)
    {
        $emailAddressParser = function(array $emailAddresses) {
            if (empty($emailAddresses)) {
                return "";
            }
            $emailAddressesParsed = [];
            foreach ($emailAddresses as $emailAddress => $key) {
                $emailAddressesParsed[] = ucwords($key) . " &lt;$emailAddress&gt;";
            }
            return implode(", ", $emailAddressesParsed);
        };
        $arrayHeaderFields = ['sender', 'from', 'to', 'replyTo', 'cc', 'bcc'];
        $content = "";
        foreach ($arrayHeaderFields as $fieldName) {
            $content .= "<p><b>" . ucwords($fieldName) . ":</b> "
                . $emailAddressParser($args[$fieldName] ?? []) . "</p>";
        }
        $content .= "<p><b>Subject:</b> " . ($args['subject'] ?? "") . "</p>";
        $content .= "</br></br></br>";
        $content .= $args['body'];
        return $content;
    }

}
