import {Component, Input, OnInit} from '@angular/core';
import {ContactService} from "../../../utilities/services/neverForgetAText/contact.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RouterModule, Router} from "@angular/router";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  public contactID: any;
  public contactToEdit: any;
  public fName: any;
  public lName: any;
  public cell: any;
  public email: any;
  public userID: any;

  constructor(private snackBar: MatSnackBar,
              private contactService: ContactService,
              private router: Router) {
    const queryString = window.location.search;

    const urlParamOne = new URLSearchParams(queryString);
    this.contactID = urlParamOne.get('cid');
  }

  ngOnInit() {
    if(this.contactToEdit) {
      this.fName = this.contactToEdit.fname;
      this.lName = this.contactToEdit.lname;
      this.email = this.contactToEdit.email;
      this.cell = this.contactToEdit.cell;
    }
    else {
      this.assignContactToEdit();
    }
  }

  async getContact() {
    this.contactToEdit = await this.contactService.getContact(this.contactID);
  }
  assignContactToEdit() {
    this.getCurrentUser();
    if (this.contactToEdit) {
      this.fName = this.contactToEdit.fName;
      this.lName = this.contactToEdit.lName;
      this.cell = this.contactToEdit.cell;
      this.email = this.contactToEdit.email;
    }
  }

  getCurrentUser() {
    this.userID = sessionStorage.id;
  }


  saveForm() {
    if (!this.fName || !this.lName || !this.email || !this.cell) {
      alert('Missing required information')
    }

    else {
      let formData = new FormData();

      formData.append('fname', this.fName ? this.fName : '');
      formData.append('lname', this.lName ? this.lName : '');
      formData.append('cell', this.cell ? this.cell : '');
      formData.append('email', this.email ? this.email : '');
      formData.append('userID', this.userID ? this.userID : '');


      let contactID = false;

      if (typeof this.contactToEdit === 'object') {
        contactID = this.contactToEdit.id;
      }

      this.contactService.saveContact(formData, contactID);
      this.snackBar.open('Saved', 'X', {
        duration: 4000
      });
      this.router.navigate(['contacts']);
    }
  }

}
