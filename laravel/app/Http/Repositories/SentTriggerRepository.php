<?php


namespace App\Http\Repositories;



use App\Models\SentTrigger;

class SentTriggerRepository
{
    public function saveSentTrigger($sentTrigger) {

        $triggerSent = new SentTrigger();



        $triggerSent->eventID = $sentTrigger->eventID;
        $triggerSent->userID = $sentTrigger->event->userID;
        $triggerSent->contactID = $sentTrigger->contactID;
        $triggerSent->date = $sentTrigger->date;

        $triggerSent->save();

    }
}
