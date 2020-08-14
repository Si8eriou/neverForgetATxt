import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../../utilities/services/neverForgetAText/contact.service";

@Component({
  selector: 'app-sent-trigger-bubble-style',
  templateUrl: './sent-trigger-bubble-style.component.html',
  styleUrls: ['./sent-trigger-bubble-style.component.scss']
})
export class SentTriggerBubbleStyleComponent implements OnInit {
  public usersAndMessages: any;
  panelOpenState = false;


  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContactsWithMessages()
  }

  async getContactsWithMessages() {
    this.usersAndMessages = await this.contactService.getContactsWithMessages(sessionStorage.id);
  }

}
