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
import {FormsModule} from "@angular/forms";
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';
import { EditEventsComponent } from './events/edit-events/edit-events.component';
import { NewEventComponent } from './events/new-event/new-event.component';
import { EventFormComponent } from './events/event-form/event-form.component';
import { ContactEventsComponent } from './events/contact-events/contact-events.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { UserEventsComponent } from './events/user-events/user-events.component';
import { DefaultEventsComponent } from './events/default-events/default-events.component';


@NgModule({
  declarations: [NeverForgetATextComponent, UserContactsComponent, CreateContactComponent, EditContactComponent, ContactFormComponent, EditEventsComponent, NewEventComponent, EventFormComponent, ContactEventsComponent, UserEventsComponent, DefaultEventsComponent],
  imports: [
    CommonModule,
    NeverForgetATextRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
  ]
})
export class NeverForgetATextModule { }
