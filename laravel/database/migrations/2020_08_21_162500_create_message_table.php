<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('message', function (Blueprint $table) {
            $table->id();
            $table->addColumn('foreignId', 'user_id')->nullable();
            $table->addColumn('foreignId', 'contact_id')->nullable();
            $table->addColumn('string', 'body')->nullable();
            $table->addColumn('integer', 'type')->nullable();
            $table->addColumn('foreignId', 'event_id')->nullable();
            $table->addColumn('dateTime', 'date')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('message');
    }
}
