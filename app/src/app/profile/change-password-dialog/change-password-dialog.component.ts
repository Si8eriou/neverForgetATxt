import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../account/account.component";
import {AuthService} from "../../utilities/services/neverForgetAText/auth.service";

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.scss']
})
export class ChangePasswordDialogComponent implements OnInit {
  public oldPasswordIsWrong: any;
  public oldPassword: any;
  public confirmpassword: any;

  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<ChangePasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  async approvePasswordChange() {

    let formData = new FormData();

    formData.append('email', this.data.email);
    formData.append('password', this.oldPassword);

    let approvePassword =  await this.authService.userLogin(formData);

    if (approvePassword.email) {
      this.dialogRef.close();
    }

    else {
      this.oldPasswordIsWrong = true;
    }
  }

}
