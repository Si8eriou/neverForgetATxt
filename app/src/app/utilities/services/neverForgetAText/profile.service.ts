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
    const url = `${environment.apiUrl}/profile/${userID}`;

    return this.http.get(url, userID).pipe(
      map((response:any) => response.profile)).toPromise();
  }

  public updateProfile(body) {
    const url = `${environment.apiUrl}/profile/updateProfile`;

    return this.http.get(url, body).pipe(
      map((response:any) => response.profile)).toPromise();
  }

}
