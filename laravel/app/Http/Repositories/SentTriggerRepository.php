<?php


namespace App\Http\Repositories;



use App\Models\Message;
use Carbon\Carbon;

class SentTriggerRepository
{
    public function saveSentTrigger($sentTrigger) {
        $SENT_MESSAGE = 0;

        $message = new Message();

        $message->event_id = $sentTrigger->eventID;
        $message->user_id = $sentTrigger->event->userID;
        $message->contact_id = $sentTrigger->contactID;
        $message->body = $sentTrigger->event->body;
        $message->type = $SENT_MESSAGE;
        $message->date = new Carbon();

        $message->save();
    }
}
