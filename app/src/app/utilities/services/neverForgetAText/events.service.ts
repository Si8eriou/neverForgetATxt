import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { map } from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient, public router: Router) { }

  public saveEvent(body, eventID) {
    let url = `${environment.apiUrl}/event/saveEvent`;

    if(eventID) {
      url += '/' + eventID;
    }

    return this.http.post(url, body).pipe(
      map((response: any) => response)).toPromise();
  }

  public getAllActiveUserEvents(userID) {
    let url = `${environment.apiUrl}/event/getAllActiveUserEvents/${userID}`;

    return this.http.get(url).pipe(
      map((response: any) => response)).toPromise();
  }

  public getContactEvents(contactID) {
    let url = `${environment.apiUrl}/event/getContactEvents/${contactID}`;

    return this.http.get(url).pipe(
      map((response: any) => response)).toPromise();
  }

  public deleteEvent(eventID) {
    let url = `${environment.apiUrl}/event/deleteEvent/${eventID}`;

    return this.http.delete(url).pipe(
      map((response: any) => response)).toPromise();
  }

  public getDefaultEvents() {
    let url = `${environment.apiUrl}/event/getDefaultEvents`;

    return this.http.get(url).pipe(
      map((response: any) => response.events)).toPromise();
  }

  public getEvent(eventID) {
    let url = `${environment.apiUrl}/event/getEvent/${eventID}`;

    return this.http.get(url).pipe(
      map((response: any) => response.event)).toPromise();
  }
}
