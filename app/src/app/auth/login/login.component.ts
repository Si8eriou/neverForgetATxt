import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: any;
  public password: any;

  constructor() { }

  ngOnInit(): void {
  }


  submitForm(username, password) {
    console.log(username, password);
  }
}
