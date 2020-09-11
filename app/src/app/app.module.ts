import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavigationComponent} from "./navigation/navigation.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {NeverForgetATextModule} from "./never-forget-atext/never-forget-atext.module";
import {IconsModule} from "./icons/icons.module";
import {AuthModule} from "./auth/auth.module";
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from "@angular/material/list";
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {MessagesComponent} from "./never-forget-atext/messages/messages.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCardModule} from "@angular/material/card";
import { ProfileComponent } from './profile/profile/profile.component';
import {MatDialogModule} from "@angular/material/dialog";
import { reducers } from './store/reducers';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule, EffectsRootModule } from '@ngrx/effects';
import {ProfileEffects} from "./store/effects/profile.effects";
import {RouterModule} from "@angular/router";
import {ContactEffects} from "./store/effects/contact.effects";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ResumeComponent,
    PortfolioComponent,
    MessagesComponent,
    ProfileComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    NeverForgetATextModule,
    IconsModule,
    AuthModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDialogModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot(
      [
        ProfileEffects,
        ContactEffects
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
