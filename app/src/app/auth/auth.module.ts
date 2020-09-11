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
import { SettingsComponent } from './settings/settings.component';
import {MatStepperModule} from "@angular/material/stepper";
import {ProfileComponent} from "../profile/profile/profile.component";

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, SettingsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(AuthRouting),
        MatFormFieldModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatStepperModule,
        RouterModule
    ]
})
export class AuthModule { }
