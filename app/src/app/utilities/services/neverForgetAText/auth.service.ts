import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {getToken} from "codelyzer/angular/styles/cssLexer";
import {Router} from "@angular/router";
import { map, skipWhile, take } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers';
import * as fromProfile from '../../../store/actions/profile.actions';
import * as profileActions from "../../../store/actions/profile.actions";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private profile: any;
  private token: string;
  private redirectUrl: string;

  constructor(private http: HttpClient,
              public router: Router,
              private store: Store
  ) { }

  public saveUser(body) {
    let url = `${environment.apiUrl}/auth/register`;

    return this.http.post(url, body).pipe(
      map((response: any) => response)).toPromise();
  }

  public userLogin(body) {
    const url = `${environment.apiUrl}/auth/userLogin`;

    return this.http.post(url, body).pipe(
      map((response:any) => response.user)).toPromise();
  }

  public checkIfEmailUsed(email) {
    const url = `${environment.apiUrl}/auth/checkIfEmailUsed`;

    return this.http.get(url, email).pipe(
      map((response:any) => response.email)).toPromise();
  }

  public approvePasswordChange(oldPassword, userID) {

    const url = `${environment.apiUrl}/auth/approvePasswordChange/${oldPassword}/${userID}`;

    return this.http.get(url, oldPassword).pipe(
      map((response:any) => response)).toPromise();
  }

  public getToken() {
    return this.token;
  }

  public canActivate() {
    let profile = 0;

    this.store.dispatch(profileActions.setProfileAction({profile: this.profile}))

    this.store.select(fromProfile.getProfileAction).pipe(
      skipWhile(profile => !profile)
    ).subscribe(profile => {
      this.profile = profile;
      console.log('auth service', this.profile);
    });

    if (this.profile.length) {
      console.log('here');
      return true;
    }

    this.router.navigate(['login']);
    console.log('there');
    return false;
  }
}
