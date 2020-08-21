<?php


namespace App\Http\Repositories;



use App\Models\Message;

class SentTriggerRepository
{
    public function saveSentTrigger($sentTrigger) {

        $triggerSent = new Message();

        $triggerSent->eventID = $sentTrigger->eventID;
        $triggerSent->userID = $sentTrigger->event->userID;
        $triggerSent->contactID = $sentTrigger->contactID;

        $triggerSent->save();
    }
}
