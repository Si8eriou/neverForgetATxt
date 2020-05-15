import { Component, OnInit } from '@angular/core';
import {EventsService} from "../../../utilities/services/neverForgetAText/events.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-contact-events',
  templateUrl: './contact-events.component.html',
  styleUrls: ['./contact-events.component.scss']
})
export class ContactEventsComponent implements OnInit {
  public events: any;
  public contactID: any;
  public eventsToIterate: any;

  constructor(private eventsService: EventsService, private router: Router) {
    const queryString = window.location.search;

    const urlParamOne = new URLSearchParams(queryString);
    this.contactID = urlParamOne.get('cid');
  }

  ngOnInit(): void {
    this.getContactEvents();
  }

  async getContactEvents() {
    this.events = await this.eventsService.getContactEvents(this.contactID);
  }

  routeToEdit(eventID) {
    this.router.navigate(['editEvent'], {queryParams: {'evID': eventID}})
  }
}
