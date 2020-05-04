<?php


namespace App\Http\Controllers\Auth;


use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function saveNewUser(Request $request) {
        $authEmail = User::where('email', $request->get('email'))->first();

        if($authEmail) {
            return false;
        }
        else {
            $user = new User();

            $user->name = $request->get('name');
            $user->email = $request->get('email');
            $user->password = $request->get('password');

            $user->save();

            return redirect('jacoby.test/home');
        }
    }

    public function userLogin(Request $request) {


        $user = User::where('email', $request->get('email'))->first();

        if(!$user) {
            //return not foujd
        }

        if($user->password === $request->get('password')) {
            dd('yes');
        }
        else {
            dd('no');
        }
        dd($user);

        if ($user){
            return response()->json(['user' => $user]);        }
        else {
            return false;
        }
    }
}
