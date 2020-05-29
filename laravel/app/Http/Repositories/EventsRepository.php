<?php


namespace App\Http\Repositories;

use App\Models\Events;
use App\Models\Trigger;
use App\Models\User;


class EventsRepository
{
    public function saveEvent($eventID, $request) {
        if ($eventID) {
            $event = Events::where('id', $eventID)->first();
        }
        else {
            $event = new Events;
        }

        $event->name = $request->get('name');
        $event->body = $request->get('body');
        $event->userID = $request->get('userID');

        $event->save();

        return $event;
    }

    public function getContactEvents($contactID, $request) {

        return Trigger::where('contactID', $contactID)->with('event')->get();
    }
    public function getDefaultEvents() {

        return Events::where('userID', '0')->with('trigger')->get();
    }
}
