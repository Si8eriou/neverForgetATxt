<?php


namespace App\Http\Repositories;

use App\Models\Events;


class EventsRepository
{
    public function saveEvent($eventID, $request) {
        if ($eventID) {
            $event = Events::where('id', $eventID)->first();

            if ($event->userID = '0') {
                $event = new Events;
            }
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

}
