<?php


namespace App\Http\Controllers\SMS;
use App\Http\Controllers\Triggers\EventTriggersController;
use Illuminate\Http\Request;
use App\Models\Events;
use App\Libraries\SendSms;
use Twilio\Rest\Client;

class SMSController
{
    public function SendSMS(Request $request) {
        $sid    = env('TWILIO_SID');
        $token  = env("TWILIO_TOKEN");
        $twilio = new Client($sid, $token);

        $message = $twilio->messages
            ->create("+14357201828",
                [
                    "body" => $request->message,
                    "from" => env("TWILIO_NUMBER")
                ]
            );
        return($message->status);
    }

}
