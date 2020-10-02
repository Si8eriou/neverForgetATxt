import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, public router: Router) { }

  public getProfile(userID) {
    console.log('getProfile', userID);
    const url = `${environment.apiUrl}/profile/${userID}`;

    return this.http.get(url, userID).pipe(
      map((response:any) => response.profile)).toPromise();
  }

  public updateProfile(body) {
    const url = `${environment.apiUrl}/profile/updateProfile`;

    return this.http.get(url, body).pipe(
      map((response:any) => response.profile)).toPromise();
  }

  public setLocalStorageProfile(profile) {
    if (profile) {
      console.log('set local profile', profile);
      localStorage.setItem('profile', JSON.stringify(profile));

    }
    return profile;
  }

  public getLocalStorageProfile() {
    console.log('getLocalStorageProfile');
    if (localStorage) {
      console.log('dope', localStorage.getItem('profile'))
      return localStorage.getItem('profile');
    }
    return false
  }

}
