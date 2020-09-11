import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {AccountComponent} from "./account/account.component";
import {MessagesSettingsComponent} from "./messages-settings/messages-settings.component";


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'messagesSettings',
    component: MessagesSettingsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
