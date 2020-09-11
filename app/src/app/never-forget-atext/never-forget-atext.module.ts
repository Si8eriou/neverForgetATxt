import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeverForgetATextRoutingModule } from './never-forget-atext-routing.module';
import { NeverForgetATextComponent } from './never-forget-atext/never-forget-atext.component';
import {MatButtonModule} from "@angular/material/button";

import { UserContactsComponent } from './contacts/user-contacts/user-contacts.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {CreateContactComponent} from "./contacts/create-contact/create-contact.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';
import { EditEventsComponent } from './events/edit-events/edit-events.component';
import { NewEventComponent } from './events/new-event/new-event.component';
import { EventFormComponent } from './events/event-form/event-form.component';
import { ContactEventsComponent } from './events/contact-events/contact-events.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { UserEventsComponent } from './events/user-events/user-events.component';
import { DefaultEventsComponent } from './events/default-events/default-events.component';
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatMenuModule} from "@angular/material/menu";
import {MatStepperModule} from "@angular/material/stepper";
import { EditContactDialogComponent } from './contacts/edit-contact-dialog/edit-contact-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { CreateContactDialogComponent } from './contacts/create-contact-dialog/create-contact-dialog.component';
import { BubbleComponent } from './messages/bubble-style-messages/bubble/bubble.component';
import { BubbleStyleMessagesComponent } from './messages/bubble-style-messages/bubble-style-messages.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    NeverForgetATextComponent,
    UserContactsComponent,
    CreateContactComponent,
    ContactFormComponent,
    EditEventsComponent,
    NewEventComponent,
    EventFormComponent,
    ContactEventsComponent,
    UserEventsComponent,
    DefaultEventsComponent,
    EditContactDialogComponent,
    CreateContactDialogComponent,
    BubbleComponent,
    BubbleStyleMessagesComponent,
  ],
  exports: [
    BubbleStyleMessagesComponent
  ],
  imports: [
    CommonModule,
    NeverForgetATextRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatStepperModule,
    MatDialogModule,
    RouterModule
  ]
})
export class NeverForgetATextModule { }
