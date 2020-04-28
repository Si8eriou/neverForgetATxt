<?php


namespace App\Http\Controllers\Auth;


use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function saveNewUser(Request $request, $userID=false) {
        if($userID) {
            $user = User::find($userID);
        }
        else {
            $user = new User();
        }

        $user->name = $request->get('name');
        $user->email = $request->get('email');
        $user->password = $request->get('password');

        $user->save();
    }
}
