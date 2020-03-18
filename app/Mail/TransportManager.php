<?php

namespace App\Mail;

use App\Services\FileMailService;

/**
 * TransportManager extends Laravel's transport manager but adds additional
 * transport drivers such as file driver(which is used for saving mails to files)
 * on local or testing systems.
 *
 * @author Adeniyi
 */
class TransportManager extends \Illuminate\Mail\TransportManager
{

    /**
     *
     * @return \App\Mail\FileTransport
     */
    public function createFileDriver()
    {
        return new FileTransport(app(FileMailService::class));
    }

}
