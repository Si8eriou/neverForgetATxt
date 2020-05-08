<?php

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
    Route::get('/getAllEvents/{userID}',  'Event\EventController@getUserEvents');
    Route::delete('/deleteEvent/{eventID}',  'Event\EventController@deleteEvent');
    Route::post('/saveEvent/{eventID}',  'Event\EventController@saveEvent');
    Route::get('/getContactEvents/${contactID}, Event\EventController@GetContactEvents');
});


