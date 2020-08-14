import {Component, Inject, inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../user-contacts/user-contacts.component";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {ContactService} from "../../../utilities/services/neverForgetAText/contact.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";


@Component({
  selector: 'app-edit-contact-dialog',
  templateUrl: './edit-contact-dialog.component.html',
  styleUrls: ['./edit-contact-dialog.component.scss']
})
export class EditContactDialogComponent implements OnInit {
  contact: FormGroup;

  error_messages = {
    'fname': [
      { type: 'required', message: 'First/Last Name is required.' },
    ],

    'lname': [
      { type: 'required', message: 'Last Name is required.' }
    ],

    'cell': [
      { type: 'required', message: 'Cell is required.'},
      { type: 'minlength', message: 'Please enter real cell number.' },
      { type: 'maxlength', message: 'Please enter real cell number' },
    ],

    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' },
      { type: 'email', message: 'please enter a valid email address.'},
    ],
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public contactToEditData: DialogData,
    public formBuilder: FormBuilder,
    private contactService: ContactService,
    private snackBar: MatSnackBar,
    private router: Router
  )
  {
    this.contact = this.formBuilder.group( {
      fname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      cell: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.email
      ])),
    })

  }

  ngOnInit(): void {
    this.setProfile();
  }

  setProfile() {
    this.contact['fname'] = this.contactToEditData['contact']['fname'] ?? '';
    this.contact['lname'] = this.contactToEditData['contact']['lname'] ?? '';
    this.contact['email'] = this.contactToEditData['contact']['email'] ?? '';
    this.contact['cell'] = this.contactToEditData['contact']['cell'] ?? '';
  }

  saveContact() {
    const formData = new FormData();

    formData.append('fname', this.contact.value.fname);
    formData.append('lname', this.contact.value.lname);
    formData.append('email', this.contact.value.email);
    formData.append('cell', this.contact.value.cell);
    formData.append('userID', sessionStorage.id)

    this.contactService.saveContact(formData, this.contactToEditData['contact']['id'] ?? '');
    this.snackBar.open('Saved', 'X', {
      duration: 4000
    });

    this.router.navigate(['contacts']);

  }

}
