import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-events',
  templateUrl: './contact-events.component.html',
  styleUrls: ['./contact-events.component.scss']
})
export class ContactEventsComponent implements OnInit {
  public events: any;
  public contactID : any;

  constructor() {
    const queryString = window.location.search;

    const urlParamOne = new URLSearchParams(queryString);
    this.contactID = urlParamOne.get('cid');
  }

  ngOnInit(): void {
  }
}
