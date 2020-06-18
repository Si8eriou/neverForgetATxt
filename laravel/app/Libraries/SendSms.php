<?php


namespace App\Libraries;
use App\Libraries\SaveSentTrigger;
use Twilio\Rest\Client;


class SendSms {
    public static function sendText($event) {
        $sid    = env('TWILIO_SID');
        $token  = env("TWILIO_TOKEN");
        $twilio = new Client($sid, $token);

        $messageBody = $event->event->body;

        $number = '+1';
        $number .= $event->contact->cell;


//        $message = $twilio->messages
//            ->create($number, // to
//                [
//                    "body" => $messageBody,
//                    "from" => env("TWILIO_NUMBER"),
//                ]
//            );
    }
}
