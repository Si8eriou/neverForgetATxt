import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../../utilities/services/neverForgetAText/contact.service";
import {Router} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-user-contacts',
  templateUrl: './user-contacts.component.html',
  styleUrls: ['./user-contacts.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class UserContactsComponent implements OnInit {
  expandedContact: ContactElement | null;
  columnsToDisplay = ['fname', 'email', 'cell'];
  columnsToDisplayNames = {
    'fname' : 'Name',
    'email' : 'E-Mail',
    'cell' : 'Cell',
  }

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

export interface ContactElement {
  name: string;
  email: string;
  number: number;
}
