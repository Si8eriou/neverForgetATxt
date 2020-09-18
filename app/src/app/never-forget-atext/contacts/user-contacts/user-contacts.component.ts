import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../../utilities/services/neverForgetAText/contact.service";
import {Router} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {EditContactDialogComponent} from "../edit-contact-dialog/edit-contact-dialog.component";
import {MatDialog} from '@angular/material/dialog';
import {CreateContactDialogComponent} from "../create-contact-dialog/create-contact-dialog.component";
import * as contactActions from "../../../store/actions/contact.action";
import * as fromRoot from "../../../store/reducers";
import {skipWhile, take} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {getProfileAction} from "../../../store/actions/profile.actions";


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
  private profile: any;
  public userContacts: any;


  expandedContact: ContactElement | null;
  columnsToDisplay = ['fname', 'cell'];
  columnsToDisplayNames = {
    'fname' : 'Name',
    'cell' : 'Cell',
  }

  constructor(private contactService: ContactService,
              private router: Router,
              public dialog: MatDialog,
              private store: Store
  ) { }

  ngOnInit(): void {
    this.getProfile();
    this.getUserContacts();
  }

  getProfile() {
    this.store.select(fromRoot.getProfile).pipe(
      take(1)
    ).subscribe(profile => {
      this.profile = profile;
    })
  }

  getUserContacts() {
    this.store.dispatch(contactActions.getContactsAction({userID: this.profile.id}));

    this.store.select(fromRoot.getContacts).pipe(
      skipWhile((contacts) => (contacts == false))
    )
      .subscribe(contacts => {
        this.userContacts = contacts;
      })
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
    const dialogRef = this.dialog.open(CreateContactDialogComponent, {
      maxHeight: '90%',
      maxWidth: '90%',
      minHeight: '50%',
      minWidth: '50%',
      height: 'auto',
      width: 'auto',
      disableClose: true,
      hasBackdrop: true,
    });
  }

}

export interface ContactElement {
  name: string;
  number: number;
}
