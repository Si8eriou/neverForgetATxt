import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from "@angular/router";
import {AuthRouting} from "./auth.routing";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, ProfileComponent, SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRouting),
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
