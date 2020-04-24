import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public saveNewUser(body) {
    let url = `${environment.apiUrl}/auth/saveNewUser`;

    return this.http.post(url, body).pipe(
      map((response: any) => response)).toPromise();
  }
}
