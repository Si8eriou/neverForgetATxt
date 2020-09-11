import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {getToken} from "codelyzer/angular/styles/cssLexer";
import {Router} from "@angular/router";
import { map, skipWhile, take } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers';

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
    this.store.select(fromRoot.getProfile).subscribe(profile => {
      this.profile = profile;
    });

    if (this.profile) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
