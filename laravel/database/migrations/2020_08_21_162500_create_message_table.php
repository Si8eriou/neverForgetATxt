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
            $table->foreignId( 'user_id')->nullable();
            $table->foreignId( 'contact_id')->nullable();
            $table->longText('body')->nullable();
            $table->integer( 'type')->nullable();
            $table->foreignId( 'event_id')->nullable();
            $table->dateTime( 'date', 0)->nullable();

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
