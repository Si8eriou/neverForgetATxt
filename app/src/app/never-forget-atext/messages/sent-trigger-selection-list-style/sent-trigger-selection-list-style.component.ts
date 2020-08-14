import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../../utilities/services/neverForgetAText/contact.service";

@Component({
  selector: 'app-sent-trigger-selection-list-style',
  templateUrl: './sent-trigger-selection-list-style.component.html',
  styleUrls: ['./sent-trigger-selection-list-style.component.scss']
})
export class SentTriggerSelectionListStyleComponent implements OnInit {
  public usersAndMessages: any;
  panelOpenState = false;


  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContactsWithMessages()
  }

  async getContactsWithMessages() {
    this.usersAndMessages = await this.contactService.getContactsWithMessages(sessionStorage.id);
    console.log(this.usersAndMessages);
  }

  fixDate(epochTime) {
   let month =  new Date(epochTime).getMonth();
   let day =  new Date(epochTime).getDay();
   let year =  new Date(epochTime).getFullYear();

   return month + '-' + day + '-' + year;
  }

}
