<?php

namespace App\Imports;

class ProcessState
{
    public ?int $numberOfRowsProcessed = 0;
    public ?int $numberOfRowsFailed = 0;
    public int $counter = 0;
    public ?array $processedRows = [];
    public ?array $failedRows = [];

    public ?array $exceptionMessages = [];
    public ?array $exceptionStackTraces = [];

    public ?int $totalRows = null;

    public bool $initiated = false;

    public ?string $status;

    /**
     * @param int $numberOfRowsProcessed
     * @param int $numberOfRowsFailed
     * @param int $counter
     * @param array $processedRows
     * @param array $failedRows
     * @param array $exceptionMessages
     * @param int|null $totalRows
     * @param array $exceptionStackTraces
     * @param bool $initiated
     */
    public function __construct(bool $initiated, ?int $numberOfRowsProcessed, ?int $numberOfRowsFailed, int $counter, ?array $processedRows, ?array $failedRows, ?array $exceptionMessages, ?int $totalRows, ?array $exceptionStackTraces, ?string $status)
    {
        $this->numberOfRowsProcessed = $numberOfRowsProcessed;
        $this->numberOfRowsFailed = $numberOfRowsFailed;
        $this->counter = $counter;
        $this->processedRows = $processedRows;
        $this->failedRows = $failedRows;
        $this->exceptionMessages = $exceptionMessages;
        $this->totalRows = $totalRows;
        $this->exceptionStackTraces = $exceptionStackTraces;
        $this->initiated = $initiated;
        $this->status = $status;
    }

}

