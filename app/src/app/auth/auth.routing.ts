import {LoginComponent} from "./login/login.component";
import {AuthComponent} from "./auth/auth.component";
import {RegisterComponent} from "./register/register.component";

export const AuthRouting = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:  'registerForm',
    component: RegisterComponent
  },

]
