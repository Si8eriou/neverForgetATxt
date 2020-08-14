import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../user-contacts/user-contacts.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ContactService} from "../../../utilities/services/neverForgetAText/contact.service";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-create-contact-dialog',
  templateUrl: './create-contact-dialog.component.html',
  styleUrls: ['./create-contact-dialog.component.scss']
})
export class CreateContactDialogComponent implements OnInit {
  loginForm: FormGroup;


  error_messages = {
    'fname': [
      { type: 'required', message: 'First/Last Name is required.' },
    ],

    'lname': [
      { type: 'required', message: 'Last Name is required.' }
    ],

    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' },
      { type: 'email', message: 'Please enter a valid email address.'},
    ],

    'cell': [
      { type: 'required', message: 'Cell number is required.' },
      { type: 'minlength', message: 'Invalid cell number.' },
      { type: 'maxlength', message: 'Invalid cell number.' }
    ],
  }

  constructor(private snackBar: MatSnackBar,
              private contactService: ContactService,
              private router: RouterModule,
              public formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.email
      ])),
      cell: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]))
    });
  }

  ngOnInit() {
  }

  saveForm() {
    let formData = new FormData();

    formData.append('fname', this?.loginForm?.value?.fname);
    formData.append('lname', this?.loginForm?.value?.lname);
    formData.append('cell', this?.loginForm?.value?.email);
    formData.append('email', this?.loginForm?.value?.email);
    formData.append('userID', sessionStorage?.id);

    let contactID = false;

    console.log(formData, contactID);

    this.contactService.saveContact(formData, contactID);
    this.snackBar.open('Saved', 'X', {
      duration: 4000
    });
  }

  canMoveForward(question) {
    for (let error of this.error_messages.email) {
      if (this.loginForm.get(question).hasError(error.type)
        && (this.loginForm.get(question).dirty || this.loginForm.get(question).touched)) {
        return false
      }
    }
    return true;
  }

}
