<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
   /**
    * Run the migrations.
    *
    * @return void
    */
   public function up()
   {
      Schema::create('products', function (Blueprint $table) {
         $table->engine = 'InnoDB';
         $table->increments('id');
         $table->string('sku');
         $table->string('name');
         $table->string('description');

         $table->unsignedInteger('user_id')->index()->nullable();
         $table->unsignedInteger('sold_by')->index()->nullable();
         $table->unsignedInteger('received_by')->index()->nullable();

         $table->unsignedInteger('branch_id')->index()->nullable();
         $table->unsignedInteger('brand_id')->index()->nullable();
         $table->unsignedInteger('category_id')->index()->nullable();
         $table->unsignedInteger('supplier_id')->index()->nullable();
         $table->unsignedInteger('invoice_id')->index()->nullable();
         $table->unsignedInteger('purchase_order_id')->index()->nullable();
         $table->string('price');
         $table->string('supplier_price');
         $table->integer('availability_status')->default(1);
         $table->string('date_sold');
         $table->string('date_received');
         $table->string('date_supplied');
         $table->timestamps();
      });

      Schema::table('products', function ($table) {
         $table->foreign('user_id')->references('id')->on('users');
        /* $table->foreign('sold_by')->references('id')->on('users');
         $table->foreign('received_by')->references('id')->on('users');*/
         $table->foreign('brand_id')->references('id')->on('brands');
         $table->foreign('branch_id')->references('id')->on('branches');
         $table->foreign('category_id')->references('id')->on('categories');
         $table->foreign('supplier_id')->references('id')->on('suppliers');
         /*$table->foreign('invoice_id')->references('id')->on('invoices');
         $table->foreign('purchase_order_id')->references('id')->on('purchase_orders');*/
      });
   }

   /**
    * Reverse the migrations.
    *
    * @return void
    */
   public function down()
   {
      Schema::dropIfExists('products');
   }
}
