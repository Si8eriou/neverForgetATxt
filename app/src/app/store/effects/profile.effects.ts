import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromRoot from '../reducers';
import * as ProfileActions from '../actions/profile.actions';
import { ProfileService } from '../../utilities/services/neverForgetAText/profile.service';
import { Store } from '@ngrx/store';

@Injectable()
export class ProfileEffects {

  getProfile$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActions.getProfileAction.type),
    switchMap((action: any) => this.profileService.getProfile(action.id)),
    map((profile: any) => ProfileActions.getProfileSuccessful({profile: profile})),
    catchError((err: string) => of(ProfileActions.getProfileFailed({err})))
  ));

  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {
  }
}
