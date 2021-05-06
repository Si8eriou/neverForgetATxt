<?php


namespace App\Http\Controllers\SMS;
use App\Libraries\SendSms;
use Illuminate\Http\Request;


class SendSmsController
{
    public function sendSms(Request $request, SendSms $sendSms, $cell) {
        return $sendSms->sendSms($request->get('body'), $cell);
    }
}
