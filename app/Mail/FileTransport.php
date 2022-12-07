<?php

namespace App\Mail;

use App\Services\FileMailService;
use Illuminate\Mail\Transport\Transport;

/**
 * Swift transport for saving mails to file on local environment
 *
 * @author Adeniyi
 */
class FileTransport extends Transport
{

    /**
     * The service that saves the mail to file
     * @var FileMailService
     */
    protected $fileMailService;

    public function __construct(FileMailService $fileMailService)
    {
        $this->fileMailService = $fileMailService;
    }

    public function send(\Swift_Mime_SimpleMessage $message, &$failedRecipients = null): int
    {
        $this->validateMessage($message);
        $this->beforeSendPerformed($message);

        $status = $this->fileMailService->saveMailToFile($message->getBody() ?? ""
            , $message->getSubject() ?? "", $message->getTo() ?? []
            , $message->getFrom() ?? [], $message->getReplyTo() ?? []
            , $message->getCc() ?? [], $message->getBcc() ?? []
            , $message->getSender() ?? []);

        $this->sendPerformed($message);
        return $status;
    }

    protected function validateMessage(\Swift_Mime_SimpleMessage $message)
    {
        if (count($message->getTo()) < 1) {
            throw new \Swift_TransportException("Cannot send message without a To address");
        }
        if (empty($message->getSender()) && count($message->getFrom()) < 1) {
            throw new \Swift_TransportException("Cannot send message without a Sender or From address");
        }
        if (count($message->getFrom()) > 1 && empty($message->getSender())) {
            throw new \Swift_TransportException("Cannot send message with multiple From headers without a sender address");
        }
    }

}
