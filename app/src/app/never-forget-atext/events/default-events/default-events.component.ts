import { Component, OnInit } from '@angular/core';
import {EventsService} from "../../../utilities/services/neverForgetAText/events.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-default-events',
  templateUrl: './default-events.component.html',
  styleUrls: ['./default-events.component.scss']
})
export class DefaultEventsComponent implements OnInit {
  public events: any;


  constructor(private eventsService: EventsService, private router: Router) { }

  ngOnInit(): void {
    this.getDefaultEvents();
  }

  async getDefaultEvents() {
    this.events = await this.eventsService.getDefaultEvents();
  }

  routeToEdit(eventID) {
    this.router.navigate(['editEvent'], {queryParams: {'evID': eventID}})
  }
}
