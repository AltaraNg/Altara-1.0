<?php

namespace App\Console\Commands;

use App\Services\RecollectionService;
use Illuminate\Console\Command;

class CollectionCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:collection';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Populate collections table to group orders based on there status';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle(RecollectionService $service)
    {
        $service->categoriseRecollection();
        return 0;
    }
}
