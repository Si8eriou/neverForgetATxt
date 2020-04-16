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
import { HomeComponent } from './home/home.component';
import {NeverForgetATextModule} from "./never-forget-atext/never-forget-atext.module";
import {IconsModule} from "./icons/icons.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        NeverForgetATextModule,
        IconsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
