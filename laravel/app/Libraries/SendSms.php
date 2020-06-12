<?php


namespace App\Libraries;
use Twilio\Rest\Client;


class SendSms {
    public static function sendText($event) {
        $sid    = env('TWILIO_SID');
        $token  = env("TWILIO_TOKEN");
        $twilio = new Client($sid, $token);
        $number = '+1';

        $number .= $event->contact->cell ?: $event->contactReceivingCell;


        $message = $twilio->messages
            ->create($event->contact->cell ?: $event->number, // to
                [
                    "body" => $event->body ?: $event->message,
                    "from" => env("TWILIO_NUMBER"),
                ]
            );
        return($message->status);
    }
}
