<?php


namespace App\Libraries;
use Twilio\Rest\Client;


class SendSms {
    public static function sendText($event) {
        $sid    = env('TWILIO_SID');
        $token  = env("TWILIO_TOKEN");
        $twilio = new Client($sid, $token);

        $messageBody = $event->event->body ?: $event->message;

        $number = '+1';
        $number .= $event->contact->cell ?: $event->contactReceivingCell;


        $message = $twilio->messages
            ->create($number, // to
                [
                    "body" => $messageBody,
                    "from" => env("TWILIO_NUMBER"),
                ]
            );
        return($message->status);
    }
}
