import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../../utilities/services/neverForgetAText/contact.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-contacts',
  templateUrl: './user-contacts.component.html',
  styleUrls: ['./user-contacts.component.scss']
})
export class UserContactsComponent implements OnInit {
  public userContacts: any;

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.getUserContacts();
  }

 async getUserContacts() {
    this.userContacts = await this.contactService.getUserContacts(sessionStorage.id);
  }

  editContact(cid) {
    this.router.navigate(['editContact'], {queryParams: {'cid': cid}})
  }

}
