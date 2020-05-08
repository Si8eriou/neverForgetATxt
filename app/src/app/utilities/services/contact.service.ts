import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map } from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient, public router: Router) { }

  public saveContact(body, contactID) {
      let url = `${environment.apiUrl}/contact`;

      if(contactID) {
        url += '/' + contactID;
      }

      return this.http.post(url, body).pipe(
        map((response: any) => response)).toPromise();
    }

  public getUserContacts(userID) {
    let url = `${environment.apiUrl}/contact/getUserContacts/${userID}`;

    return this.http.get(url).pipe(
      map((response: any) => response.userContacts)).toPromise();
  }
}
