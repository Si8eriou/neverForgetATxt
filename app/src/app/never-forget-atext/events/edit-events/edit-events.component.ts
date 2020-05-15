import { Component, OnInit } from '@angular/core';
import {EventsService} from "../../../utilities/services/neverForgetAText/events.service";

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.scss']
})
export class EditEventsComponent implements OnInit {
  public eventToEdit: any;
  public eventID: any;

  constructor(private eventsService: EventsService) {
    const queryString = window.location.search;

    const urlParamOne = new URLSearchParams(queryString);
    this.eventID = urlParamOne.get('evID');
  }

  ngOnInit(): void {
    this.getEvent(this.eventID);
  }

  async getEvent(eventID) {
    this.eventToEdit = await this.eventsService.getEvent(eventID);
  }
}
