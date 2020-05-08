import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NeverForgetATextComponent} from "./never-forget-atext/never-forget-atext.component";
import {UserContactsComponent} from "./contacts/user-contacts/user-contacts.component";
import {CreateContactComponent} from "./contacts/create-contact/create-contact.component";
import {ContactEventsComponent} from "./events/contact-events/contact-events.component";
import {NewEventComponent} from "./events/new-event/new-event.component";
import {EditEventsComponent} from "./events/edit-events/edit-events.component";
import {EditContactComponent} from "./contacts/edit-contact/edit-contact.component";



const routes: Routes = [
  {
    path: '',
    component: NeverForgetATextComponent
  },
  {
    path: 'contacts',
    component: UserContactsComponent
  },
  {
    path: 'createContact',
    component: CreateContactComponent
  },
  {
    path: 'contactEvents',
    component: ContactEventsComponent
  },
  {
    path: 'newEvent',
    component: NewEventComponent
  },
  {
    path: 'editEvent',
    component: EditEventsComponent
  },
  {
    path: 'editContact',
    component: EditContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeverForgetATextRoutingModule { }
