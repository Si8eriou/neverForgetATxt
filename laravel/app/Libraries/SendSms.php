<?php


namespace App\Libraries;
use Twilio\Rest\Client;
require_once '../../vendor/autoload.php';


class SendSms {
    public static function sendText($event) {
        $sid    = env('TWILIO_SID');
        $token  = env("TWILIO_TOKEN");
        $twilio = new Client($sid, $token);

        $message = $twilio->messages
            ->create("+14357201828", // to
                [
                    "body" => $event->body,
                    "from" => env("TWILIO_NUMBER"),
                ]
            );
        return($message->status);
    }
}
