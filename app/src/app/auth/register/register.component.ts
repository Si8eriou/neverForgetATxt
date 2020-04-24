import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../utilities/services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public fName: any;
  public lName: any;
  public email: any;
  public password: any;
  public rePassword: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submitForm() {
    let formData = new FormData();

    formData.append('name', this.fName);
    formData.append('email', this.email);
    formData.append('password', this.password);


    this.authService.saveNewUser(formData);
  }

}
