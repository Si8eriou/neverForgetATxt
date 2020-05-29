<?php


namespace App\Libraries;


use App\Models\Events;

class EventsLibrary
{
    public function getAllActiveUserEvents($userID, $request) {

        return Events::where('userID', $userID)->with('trigger')->get();
    }

    public function getEvent($eventID) {

        return Events::where('id', $eventID)->with('trigger')->first();
    }
}
