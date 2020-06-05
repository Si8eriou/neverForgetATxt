import {Component, Input, OnInit} from '@angular/core';
import {SendSmsService} from "../utilities/services/neverForgetAText/send-sms.service";
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.scss']
})
export class SendSmsComponent implements OnInit {

  public whoToNum: any;
  public message: any;


  constructor(private sendSmsService: SendSmsService) { }

  ngOnInit(): void {
  }

  sendSms() {
    let formData = new FormData();

    formData.append('message', this.message ? this.message : '');
    formData.append('contactReceivingCell', this.whoToNum ? this.whoToNum : '');

    this.sendSmsService.sendSMS(formData);
  }

}
