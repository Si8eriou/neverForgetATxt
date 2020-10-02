import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {from, of} from 'rxjs';

import * as fromRoot from '../reducers';
import * as profileActions from '../actions/profile.actions';
import { ProfileService } from '../../utilities/services/neverForgetAText/profile.service';
import { Store } from '@ngrx/store';
import {fromPromise} from "rxjs/internal-compatibility";

@Injectable()
export class ProfileEffects {

  // getProfile = createEffect(() => this.actions$.pipe(
  //   ofType(profileActions.getProfileAction.type),
  //   switchMap((action: any) => {
  //
  //     console.log('getProfileAcction');
  //     return this.store.select(fromRoot.getProfile).pipe(
  //       switchMap((profile: any) => {
  //         console.log('i am here');
  //         if (profile.profile.length) {
  //           console.log('yeet');
  //           return of(profile);
  //         }
  //         else {
  //           console.log('here');
  //           if (this.profileService.getLocalStorageProfile()) {
  //             return of(this.profileService.getLocalStorageProfile());
  //           }
  //           console.log('there');
  //           return this.profileService.getProfile(action.userID);
  //         }
  //       })
  //     );
  //   }),
  //   map((profile: any) => profileActions.getProfileSuccessful({profile: profile})),
  //   catchError((err: string) => of(profileActions.getProfileFailed({err})))
  // ));

  getProfile = createEffect(() => this.actions$.pipe(
    ofType(profileActions.setProfileAction.type),
    switchMap((payload) => {
      return this.store.select(fromRoot.getProfile).pipe(
        switchMap((profile: any) => {

          return this.profileService.getLocalStorageProfile;
        })
      )
    }),
      map((profile: any) => profileActions.getProfileSuccessful({profile: profile})),
      catchError((err: string) => of(profileActions.getProfileFailed({err})))
  ));

  setProfile = createEffect(() => this.actions$.pipe(
    ofType(profileActions.setProfileAction.type),
    switchMap((action: any) => this.profileService.setLocalStorageProfile(action.profile)),
    map((profile: any) => profileActions.setProfileActionSuccessful({profile: profile})),
    catchError((err: string) => of(profileActions.setProfileActionFailed({err})))
  ))

  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
    private store: Store
  ) {
  }
}
