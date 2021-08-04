<?php

namespace App\Exceptions;

use Exception;

class AException extends Exception {

    /**
     * An array of more specific error messages to be sent to the client.
     *
     * @var array
     */
    protected $errorMessages = [];

    public function __construct(string $message = "", int $code = 0
        , array $errorMessages = [], \Exception $previous = null) {
        parent::__construct($message, $code, $previous);
        $this->errorMessages = $errorMessages;
    }

    public function getErrorMessages() {
        return $this->errorMessages;
    }

}
