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

  public sendSms(body, cell) {
    let url = `${environment.apiUrl}/send-sms/${cell}/direct-message`;

    return this.http.post(url, body).pipe(
      map((response: any) => response)).toPromise();
  }
}
