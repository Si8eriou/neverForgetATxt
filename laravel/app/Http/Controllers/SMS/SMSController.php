<?php


namespace App\Http\Controllers\SMS;
use App\Http\Controllers\Triggers\EventTriggersController;
use Illuminate\Http\Request;
use App\Models\Events;
use App\Libraries\SendSms;

class SMSController
{
    public function sendSMS(Request $request, SendSms $sendSms) {
        $message = $sendSms->sendText($request);
    }

}
