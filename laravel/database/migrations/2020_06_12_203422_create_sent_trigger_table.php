<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSentTriggerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sent_trigger_table', function (Blueprint $table) {
            $table->id();
            $table->addColumn('integer', 'eventID');
            $table->addColumn('integer', 'userID');
            $table->addColumn('integer', 'contactID');
            $table->addColumn('integer', 'date');
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
        Schema::dropIfExists('sent_trigger_table');
    }
}
