import {Component, Input, OnInit} from '@angular/core';
import {SendSmsService} from "../utilities/services/neverForgetAText/send-sms.service";

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.scss']
})
export class SendSmsComponent implements OnInit {
  @Input() message;
  @Input() userSending;
  @Input() contactReceiving;

  public userNumber: any;


  constructor(private sendSmsService: SendSmsService) { }

  ngOnInit(): void {
  }

  sendSms() {
    let formData = new FormData();

    formData.append('message', this.message ? this.message : '');
    formData.append('contactReceivingCell', this.contactReceiving.cell ? this.contactReceiving.cell : '');

    this.sendSmsService.sendSMS(formData);
  }

}
