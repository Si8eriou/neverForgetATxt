import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../utilities/services/neverForgetAText/auth.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public name: any;
  public email: any;
  public password: any;
  public rePassword: any;
  public userRegistered: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    if (!this.name) {
      alert('Must have a Name')
    }
    if (!this.email) {
      alert('Must have a email')
    }
    if (!this.password) {
      alert('Must have a password')
    }
    if (!this.rePassword) {
      alert('Must reenter a password')
    }
    if (this.password !== this.rePassword) {
      alert('Password does not match.')
    }
    if (!this.email.includes('@') || !this.email.includes('.com')) {
      alert('must be proper email.')
    }
    else {
      if (this.password !== this.rePassword) {
        alert('Password does not match.')
      }
      else {
        let formData = new FormData();

        formData.append('name', this.name);
        formData.append('email', this.email);
        formData.append('password', this.password);


        this.userRegistered = this.authService.saveUser(formData);

        if(this.userRegistered) {
          sessionStorage.setItem('user', this.userRegistered);
          this.router.navigate( ['home'])
        }
        else {
          alert('Email is already used.')
        }
      }
    }
    }

}
