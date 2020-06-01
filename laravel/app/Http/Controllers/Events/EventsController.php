<?php


namespace App\Http\Controllers\Events;
use App\Http\Controllers\Triggers\EventTriggersController;
use App\Http\Repositories\EventsRepository;
use App\Http\Repositories\TriggersRepository;
use App\Libraries\EventsLibrary;
use Illuminate\Http\Request;
use App\Models\Events;


class EventsController
{
    public function saveEvent(Request $request, EventsRepository $eventsRepository,
                              TriggersRepository $triggersRepository, $eventID = false) {

        $event = $eventsRepository->saveEvent($eventID, $request);

        $eventTrigger = $triggersRepository->saveTrigger($event, $request);

        return response()->json(['event' => $event]);
    }

    public function getAllActiveUserEvents(Request $request, EventsLibrary $eventsLibrary,
                                           $userID) {
        $events = $eventsLibrary->getAllActiveUserEvents($userID, $request);

        return response()->json(['events' => $events], 200, [], JSON_INVALID_UTF8_IGNORE);
    }

    public function getContactEvents(Request $request, EventsRepository $eventsRepository, $contactID) {
        $triggers = $eventsRepository->getContactEvents($contactID, $request);

        return response()->json(['triggers' => $triggers], 200, [], JSON_INVALID_UTF8_IGNORE);
    }

    public function getDefaultEvents(Request $request, EventsRepository $eventsRepository) {
        $events = $eventsRepository->getDefaultEvents();

        return response()->json(['events' => $events], 200, [], JSON_INVALID_UTF8_IGNORE);
    }

    public function getEvent(Request $request, EventsLibrary $eventsLibrary, $eventID) {
        $event = $eventsLibrary->getEvent($eventID);

        return response()->json(['event' => $event], 200, [], JSON_INVALID_UTF8_IGNORE);
    }
}
