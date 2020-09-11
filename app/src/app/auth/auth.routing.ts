import {LoginComponent} from "./login/login.component";
import {AuthComponent} from "./auth/auth.component";
import {RegisterComponent} from "./register/register.component";
import {SettingsComponent} from "./settings/settings.component";

export const AuthRouting = [
  {
    path: 'auth',
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
  {
    path: 'userSettings',
    component: SettingsComponent
  }
]
