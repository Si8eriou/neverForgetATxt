import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../utilities/services/neverForgetAText/auth.service";
import {Router} from "@angular/router";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: any;
  public password: any;
  public name: any;
  public userLogged: any;

  constructor(private authService: AuthService, private router: Router, private matSnackBar: MatSnackBarModule) { }

  ngOnInit(): void {
  }


  async submitForm() {
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

      this.userLogged = await this.authService.userLogin(formData);

      if (this.userLogged) {
        sessionStorage.setItem('user', this.userLogged.name);
        sessionStorage.setItem('id', this.userLogged.id);
        sessionStorage.setItem('remember_token', this.userLogged.remember_token);
        await this.router.navigate(['']);
        window.location.reload();
      }
      else {
        alert('Username or password do not match records')
      }
    }

    }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.submitForm();
    }
  }
}
