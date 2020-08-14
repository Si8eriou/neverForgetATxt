import { Component, OnInit } from '@angular/core';
import {EventsService} from "../../../utilities/services/neverForgetAText/events.service";

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.scss']
})
export class UserEventsComponent implements OnInit {
  public events: any;

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.getAllActiveUserEvents();
  }

  async getAllActiveUserEvents() {
   this.events = await this.eventsService.getAllActiveUserEvents(sessionStorage.id);
  }
}
