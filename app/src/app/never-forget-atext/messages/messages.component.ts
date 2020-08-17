import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ContactService} from "../../utilities/services/neverForgetAText/contact.service";
import {EditContactDialogComponent} from "../contacts/edit-contact-dialog/edit-contact-dialog.component";
import {MatDialog} from "@angular/material/dialog";

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


  constructor(
    private contactService: ContactService,
    public dialog: MatDialog
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

  logthis(test) {
    console.log(test);
  }
}
