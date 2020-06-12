<?php

use App\Jobs\SendEventSms;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['prefix' => 'auth'], function() {
    Route::post('register', 'Auth\AuthController@saveNewUser');
    Route::post('userLogin', 'Auth\AuthController@userLogin');
});

Route::group(['prefix' => 'contact'], function() {
    Route::post('/{contactID?}', 'Contact\ContactController@saveContact');
    Route::get('/getUserContacts/{userID}', 'Contact\ContactController@getUserContacts');
    Route::get('/getContact/{contactID}', 'Contact\ContactController@getContact');
});

Route::group(['prefix' => 'event'], function() {
    Route::get('/getAllActiveUserEvents/{userID}',  'Events\EventsController@getAllActiveUserEvents');
    Route::get('/getContactEvents/{contactID}', 'Events\EventsController@getContactEvents');
    Route::get('/getDefaultEvents', 'Events\EventsController@getDefaultEvents');
    Route::get('/getEvent/{eventID}', 'Events\EventsController@getEvent');
    Route::get('/getEventRepeatTypes', 'Events\EventController@getEventRepeatType');
    Route::delete('/deleteEvent/{eventID}',  'Events\Eventsontroller@deleteEvent');
    Route::post('/saveEvent/{eventID?}',  'Events\EventsController@saveEvent');
});

Route::group(['prefix' => 'sendSMS'], function() {
    Route::post('', 'SMS\SMSController@sendSMS');
});

Route::get('test', function () {
    SendEventSms::dispatch(new Carbon\Carbon());
});


