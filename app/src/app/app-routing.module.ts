import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthService} from "./utilities/services/neverForgetAText/auth.service";
import {DefaultEventsComponent} from "./never-forget-atext/events/default-events/default-events.component";


const routes: Routes = [
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate:[AuthService]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate:[AuthService]
  },
  {
    path: 'text',
    loadChildren: './never-forget-atext/never-forget-atext.module#NeverForgetATextModule',
    canActivate:[AuthService]
  },
  {
    path: 'defaultEvent',
    component: DefaultEventsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
