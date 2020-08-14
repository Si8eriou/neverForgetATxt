import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../utilities/services/neverForgetAText/auth.service";
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public userRegistered: any;
  loginForm: FormGroup;

  error_messages = {
    'fname': [
      { type: 'required', message: 'First/Laste Name is required.' },
    ],

    'lname': [
      { type: 'required', message: 'Last Name is required.' }
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


  constructor(private authService: AuthService,
              private router: Router,
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
      validators: this.password.bind(this)
    });
  }

  ngOnInit(): void {
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
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

  async checkEmail() {
    let emailAlreadyUsed = await this.authService.checkIfEmailUsed(this?.loginForm?.value?.email);
  }

  async submitForm() {
        let formData = new FormData();

        formData.append('name', this.loginForm.value.fname);
        formData.append('email', this.loginForm.value.email);
        formData.append('password', this.loginForm.value.password);

        this.userRegistered = await this.authService.saveUser(formData);

        if(this.userRegistered) {
          sessionStorage.setItem('user', this.userRegistered);
          this.router.navigate( [''])
        }
        else {
          alert('Email is already used.')
        }
      }
}
