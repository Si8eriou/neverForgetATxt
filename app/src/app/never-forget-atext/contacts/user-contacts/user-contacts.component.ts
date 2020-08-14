import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../../utilities/services/neverForgetAText/contact.service";
import {Router} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {EditContactDialogComponent} from "../edit-contact-dialog/edit-contact-dialog.component";
import {MatDialog} from '@angular/material/dialog';


export interface DialogData {
  contactToEditData: any;
}


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
    'cell' : 'Cell',
  }

  public userContacts: any;

  constructor(private contactService: ContactService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUserContacts();
  }

 async getUserContacts() {
    this.userContacts = await this.contactService.getUserContacts(sessionStorage.id);
  }

  openEditContactDialog(contact) {
    const dialogRef = this.dialog.open(EditContactDialogComponent, {
      maxHeight: '90%',
      maxWidth: '90%',
      minHeight: '50%',
      minWidth: '50%',
      height: 'auto',
      width: 'auto',
      disableClose: true,
      hasBackdrop: true,
      data: {
        contact: contact
      }
    });
  }

  openCreateContactDialog() {
    const dialogRef = this.dialog.open(EditContactDialogComponent, {
      maxHeight: '90%',
      maxWidth: '90%',
      minHeight: '50%',
      minWidth: '50%',
      height: 'auto',
      width: 'auto',
      disableClose: true,
      hasBackdrop: true,
      data: {
        contact: contact
      }
    });
  }

}

export interface ContactElement {
  name: string;
  number: number;
}
