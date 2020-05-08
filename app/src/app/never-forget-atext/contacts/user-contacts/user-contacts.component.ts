import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../../utilities/services/contact.service";

@Component({
  selector: 'app-user-contacts',
  templateUrl: './user-contacts.component.html',
  styleUrls: ['./user-contacts.component.scss']
})
export class UserContactsComponent implements OnInit {
  public userContacts: any;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getUserContacts();
  }

 async getUserContacts() {
    this.userContacts = await this.contactService.getUserContacts(sessionStorage.id);
    console.log(this.userContacts);
  }

}
