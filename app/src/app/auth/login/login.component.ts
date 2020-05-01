import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../utilities/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: any;
  public password: any;
  public name: any;
  public user: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  async submitForm(email, password) {
    if (!this.email) {
      alert('No email entered');
    }
    if (!this.password) {
      alert('No password entered');
    }
    else {
      let formData = new FormData();
      formData.append('email', this.email ? this.email : '');
      formData.append('password', this.password ? this.password : '');

      this.user = await this.authService.userLogin(formData);
    }

    if (this.user) {
      console.log(this.user);
      sessionStorage.setItem('user', this.user);
    }
    else {
      console.log('false');
    }
    }
}
