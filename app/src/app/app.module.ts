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
import {HomeModule} from "./home/home.module";
import {MatNativeDateModule} from "@angular/material/core";
import { SendSmsComponent } from './send-sms/send-sms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SendSmsComponent,
  ],
    imports: [
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
        HomeModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
