import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ContactService} from "../../utilities/services/neverForgetAText/contact.service";
import {EditContactDialogComponent} from "../contacts/edit-contact-dialog/edit-contact-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {SendSmsService} from "../../utilities/services/neverForgetAText/send-sms.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatBottomSheet, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {NewContactMessageBottomSheetComponent} from "../contacts/new-contact-message-bottom-sheet/new-contact-message-bottom-sheet.component";

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
  public contacts: any;


  constructor(
    private contactService: ContactService,
    public dialog: MatDialog,
    public sendSmsService: SendSmsService,
    private snackBar: MatSnackBar,
    private _bottomSheet: MatBottomSheet
    ) { }

  ngOnInit(): void {
    this.getContactsWithMessages()
    this.getUserContacts();
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

  openNewContactMessageBottomSheet() {
    if (this.contacts) {
      const bottomSheetRef = this._bottomSheet.open(NewContactMessageBottomSheetComponent, {
        data: {
          contacts: this.contacts
        }
      });

      bottomSheetRef.afterDismissed().subscribe((result) => {
        this.messageToSend = result

        console.log(result);

      })
    }
  }

  async getUserContacts() {
    this.contacts = await this.contactService.getUserContacts(sessionStorage.id);
  }

  async sendSms(contact) {
    console.log(contact);
    // let messageSent = await this.sendSmsService.sendSms(this.messageToSend, contact.cell);
    this.snackBar.open('Message Sent', 'X', {
      duration: 4000
    });
  }
}
