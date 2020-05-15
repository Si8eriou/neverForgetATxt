import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {
  public contactID: any;

  constructor() {
    const queryString = window.location.search;

    const urlParamOne = new URLSearchParams(queryString);
    this.contactID = urlParamOne.get('cid');
  }

  ngOnInit(): void {
  }

}
