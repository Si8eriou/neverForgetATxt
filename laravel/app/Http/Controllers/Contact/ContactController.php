<?php


namespace App\Http\Controllers\Contact;


use App\Http\Controllers\Controller;
use App\Models\Contacts;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function saveContact(Request $request, $contactID = false) {
        if($contactID) {
            $contact = Contacts::where('id', $contactID)->get();
        }
        else {
            $contact = new Contacts;
        }


        $contact->fname = $request->get('fname');
        $contact->lname = $request->get('lname');
        $contact->cell = $request->get('cell');
        $contact->email = $request->get('email');
        $contact->userID = $request->get('userID');

        $contact->save();

        return response()->json(['contact' => $contact]);
    }

    public function getUserContacts(Request $request, $userID) {
        $userContacts = Contacts::with('user')->where('userID', $userID)->get();

        return response()->json(['userContacts' => $userContacts], 200, [], JSON_INVALID_UTF8_IGNORE);
    }

}
