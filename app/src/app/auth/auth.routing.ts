import {LoginComponent} from "./login/login.component";
import {AuthComponent} from "./auth/auth.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {SettingsComponent} from "./settings/settings.component";

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
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'userSettings',
    component: SettingsComponent
  }
]
