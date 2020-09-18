import {Component, Inject, OnInit} from '@angular/core';
import {ProfileService} from "../../utilities/services/neverForgetAText/profile.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../utilities/services/neverForgetAText/auth.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ChangePasswordDialogComponent} from "../change-password-dialog/change-password-dialog.component";


export interface DialogData {
  password: any;
  email: any;
}


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public userProfile: any;
  public oldPassword: any;
  changePassword = false;
  public password: any;

  loginForm: FormGroup;

  error_messages = {
    'fname': [
      { type: 'required', message: 'First/Last Name is required.' },
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' },
      { type: 'email', message: 'please enter a valid email address.'},
    ],

    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
  }

  constructor(private profileService: ProfileService,
              private authService: AuthService,
              private router: Router,
              public formBuilder: FormBuilder,
              public dialog: MatDialog
  ) {
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
    }, {
      validators: this.passwordCheck.bind(this)
    });
  }

  ngOnInit(): void {
    this.getProfile();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
      width: '400px',
      data: {
        email: this.loginForm['email'],
        password: this.password,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loginForm['password'] = result;
    });
  }

  passwordCheck(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  async getProfile() {
    let userProfile = await this.profileService.getProfile(sessionStorage.id);
    this.setProfile(userProfile);
  }

  setProfile(userProfile) {
    if (userProfile) {
      this.loginForm['fname'] = userProfile.name;
      this.loginForm['email'] = userProfile.email;
      this.loginForm['password'] = userProfile.password;
    }
  }

  async saveProfile() {
    let formData = new FormData();

    formData.append('email', this.loginForm['email']);
    formData.append('password', this.password);
    formData.append('id', sessionStorage.id);
    formData.append('fname', this.loginForm['fname']);
  }



}


