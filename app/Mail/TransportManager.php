<?php

namespace App\Mail;

use App\Services\FileMailService;
use Illuminate\Mail\MailManager;

/**
 * TransportManager extends Laravel's transport manager but adds additional
 * transport drivers such as file driver(which is used for saving mails to files)
 * on local or testing systems.
 *
 * @author Adeniyi
 */
class TransportManager extends MailManager
{

    /**
     *
     * @return FileTransport
     */
    public function createFileTransport()
    {
        return new FileTransport(app(FileMailService::class));
    }

}
