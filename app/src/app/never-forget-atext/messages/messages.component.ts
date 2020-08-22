import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ContactService} from "../../utilities/services/neverForgetAText/contact.service";
import {EditContactDialogComponent} from "../contacts/edit-contact-dialog/edit-contact-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {SendSmsService} from "../../utilities/services/neverForgetAText/send-sms.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  public messageToSend: any;


  constructor(
    private contactService: ContactService,
    public dialog: MatDialog,
    public sendSmsService: SendSmsService,
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.getContactsWithMessages()

  }

  async getContactsWithMessages() {
    this.usersAndMessages = await this.contactService.getContactsWithMessages(sessionStorage.id);
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
}
