<?php


namespace App\Http\Controllers\Contact;


use App\Http\Controllers\Controller;
use App\Http\Repositories\ContactsRepository;
use App\Models\Contacts;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function saveContact(Request $request, ContactsRepository $contactsRepository, $contactID = false) {

        $contact = $contactsRepository->saveContact($contactID, $request);

        return response()->json(['contact' => $contact]);
    }

    public function getUserContacts(Request $request, $userID, ContactsRepository $contactsRepository) {
        $userContacts = $contactsRepository->getUserContacts($userID);

        return response()->json(['userContacts' => $userContacts], 200, [], JSON_INVALID_UTF8_IGNORE);
    }

    public function getContact(Request $request, $contactID, ContactsRepository $contactsRepository) {
        $contact = $contactsRepository->getContact($contactID);

        return response()->json(['contact' => $contact], 200, [], JSON_INVALID_UTF8_IGNORE);
    }
}
