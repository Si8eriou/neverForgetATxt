import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {map, tap} from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import {getToken} from "codelyzer/angular/styles/cssLexer";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  private redirectUrl: string;

  constructor(private http: HttpClient, public router: Router) { }

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

  public getToken() {
    return this.token;
  }

  public canActivate(): boolean {
    if (sessionStorage.getItem('id') == null) {
      this.router.navigate(['login']);

      return false;
    }
    return true;
  }
}
