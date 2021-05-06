import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ContactService} from "../../utilities/services/neverForgetAText/contact.service";
import {EditContactDialogComponent} from "../contacts/edit-contact-dialog/edit-contact-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {SendSmsService} from "../../utilities/services/neverForgetAText/send-sms.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Store} from "@ngrx/store";
import * as contactActions from '../../store/actions/contact.action';
import * as fromRoot from "../../store/reducers";
import {skipWhile, take} from "rxjs/operators";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public checked: boolean = false;
  public disabled: boolean = false;
  color: ThemePalette = 'primary';
  public usersAndMessages: any;
  public panelOpenState: boolean = false;
  public messageToSend: any;
  public profile: any;
  public userID: any;
  public deleteMessages: boolean = false;

  constructor(
    private contactService: ContactService,
    public dialog: MatDialog,
    public sendSmsService: SendSmsService,
    private snackBar: MatSnackBar,
    private store: Store
    ) { }

  ngOnInit(): void {
    this.profile = this.getUser();
    if (this.profile) {
      console.log('what the fucked');
      this.getContactsWithMessages();
    }
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

  async sendSms(contact) {

    let messageSent = await this.sendSmsService.sendSms(this.messageToSend, contact.cell);

    this.snackBar.open('Message Sent', 'X', {
      duration: 4000
    });
  }

  getUser() {
    let profileResponse = false;

    this.store.select(fromRoot.getProfile)
      .subscribe(profile => {
        profileResponse = profile;
      });

    return profileResponse;
  }

  getContactsWithMessages() {
    this.store.dispatch(contactActions.getContactsWithMessagesAction({userID: this.profile.id}));

    this.store.select(fromRoot.getContactsWithMessages).pipe(
      skipWhile((contactsWithMessages) => (contactsWithMessages == false)),
      take(1)
    ).subscribe(contacts => {
      this.usersAndMessages = contacts;
    })
  }
}
