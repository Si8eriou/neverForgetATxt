import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ContactService} from "../../../utilities/services/neverForgetAText/contact.service";
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public fName: any;
  public lName: any;
  public cell: any;
  public email: any;
  public userID: any;

  @Input() contactToEdit: any;

  constructor(private snackBar: MatSnackBar, private contactService: ContactService,
              private router: RouterModule) { }

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
      // this.router.navigate(['']);
    }
  }

}

