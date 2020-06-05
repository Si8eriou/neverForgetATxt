import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { environment } from "../../../../environments/environment";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SendSmsService {

  constructor(private http: HttpClient, public router: Router) { }

  public sendSMS(body) {
    let url = `${environment.apiUrl}/sendSMS`;

    return this.http.post(url, body).pipe(
      map((response: any) => response)).toPromise();
  }
}
