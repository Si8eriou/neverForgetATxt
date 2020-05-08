<?php


namespace App\Http\Repositories;

use App\Http\Controllers\Controller;
use App\Models\Contacts;
use Illuminate\Http\Request;


class ContactsRepository
{
    public function saveContact($contactID, $request)
    {
        if ($contactID) {
            $contact = Contacts::where('id', $contactID)->first();
        } else {
            $contact = new Contacts;
            $contact->userID = $request->get('userID');
        }


        $contact->fname = $request->get('fname');
        $contact->lname = $request->get('lname');
        $contact->cell = $request->get('cell');
        $contact->email = $request->get('email');

        $contact->save();

        return $contact;
    }

    public function getUserContacts($userID) {
        $userContacts = Contacts::with('user')->where('userID', $userID)->get();

        return $userContacts;
    }

    public function getContact($contactID) {
        $contact = Contacts::where('id', $contactID)->first();

        return $contact;
    }

}
