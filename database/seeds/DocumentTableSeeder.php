<?php

use App\Document;
use Illuminate\Database\Seeder;

class DocumentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $document = new Document();
        $document->user_id = 1;
        $document->customer_id = 2;
        $document->id_card = 0;
        $document->id_card_url = '';
        $document->passport = 1;
        $document->passport_url = 'this is the link bro';
        $document->save();

        $document = new Document();
        $document->user_id = 2;
        $document->customer_id = 1;
        $document->id_card = 0;
        $document->id_card_url = '';
        $document->passport = 0;
        $document->passport_url = '';
        $document->save();

        $document = new Document();
        $document->user_id = 1;
        $document->customer_id = 3;
        $document->id_card = 1;
        $document->id_card_url = "the url to the image";
        $document->passport = 1;
        $document->passport_url = 'the url to the image';
        $document->save();

    }
}
