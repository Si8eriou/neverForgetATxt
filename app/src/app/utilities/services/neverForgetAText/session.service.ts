import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {HttpClient} from "@angular/common/http";
import * as fromRoot from '../../../store/reducers';
import * as profileActions from '../../../store/actions/profile.actions';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient,
              private store: Store<fromRoot.State>) {}


  public clearStore() {
    this.store.dispatch(profileActions.setProfileAction({profile: null}));
  }
}

