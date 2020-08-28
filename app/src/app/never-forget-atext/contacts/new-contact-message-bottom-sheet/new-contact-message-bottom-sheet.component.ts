import {Component, Inject, Input, OnInit} from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheet,
  matBottomSheetAnimations,
  MatBottomSheetRef
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-new-contact-message-bottom-sheet',
  templateUrl: './new-contact-message-bottom-sheet.component.html',
  styleUrls: ['./new-contact-message-bottom-sheet.component.scss']
})
export class NewContactMessageBottomSheetComponent implements OnInit {
  public contactToMessage: any;
  public messageBody: any;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private _bottomSheetRef: MatBottomSheetRef<NewContactMessageBottomSheetComponent>
  ) { }

  ngOnInit(): void {
  }

  closeBottomSheet() {
    let messageToSend = [
      contact => this.contactToMessage,
      body => this.messageBody
    ];

    let result = this.contactToMessage;

    this._bottomSheetRef.dismiss(result);
  }
}
