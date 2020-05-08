import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NeverForgetATextComponent} from "./never-forget-atext/never-forget-atext.component";
import {UserContactsComponent} from "./contacts/user-contacts/user-contacts.component";
import {CreateContactComponent} from "./contacts/create-contact/create-contact.component";



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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeverForgetATextRoutingModule { }
