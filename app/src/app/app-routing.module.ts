import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthService} from "./utilities/services/neverForgetAText/auth.service";
import {DefaultEventsComponent} from "./never-forget-atext/events/default-events/default-events.component";
import {ResumeComponent} from "./resume/resume.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {SettingsComponent} from "./auth/settings/settings.component";
import {MessagesComponent} from "./never-forget-atext/messages/messages.component";
import {ProfileModule} from "./profile/profile.module";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path:'register',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate:[AuthService]
  },
  {
    path: '',
    redirectTo: 'text',
    pathMatch: 'full',
  },
  {
    path: 'text',
    loadChildren: './never-forget-atext/never-forget-atext.module#NeverForgetATextModule',
    canActivate:[AuthService]
  },
  {
    path: 'defaultEvent',
    component: DefaultEventsComponent,
    canActivate:[AuthService]
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate:[AuthService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
