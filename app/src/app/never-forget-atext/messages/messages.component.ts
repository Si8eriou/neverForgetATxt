import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ContactService} from "../../utilities/services/neverForgetAText/contact.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  checked = false;
  disabled = false;
  color: ThemePalette = 'primary';
  public usersAndMessages: any;
  panelOpenState = false;


  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContactsWithMessages()
  }

  async getContactsWithMessages() {
    this.usersAndMessages = await this.contactService.getContactsWithMessages(sessionStorage.id);
  }

  getSentTriggers(contact) {
    console.log(contact);

    if (contact?.sent_triggers?.length > 0) {
      return contact;
    }
  }
}
