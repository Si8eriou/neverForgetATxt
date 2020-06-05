import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ContactService} from "../../../utilities/services/neverForgetAText/contact.service";
import {Router} from "@angular/router";
import {EventsService} from "../../../utilities/services/neverForgetAText/events.service";
import {MatNativeDateModule} from "@angular/material/core";
import {format} from "util";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  date = new FormControl()
  public eventName: any;
  public eventBody: any;
  public eventDate: any;
  public userID: any;
  public contactID: any;

  @Input() eventToEdit;


  constructor(private snackBar: MatSnackBar, private eventsService: EventsService,
              private router: Router, private matNativeDateModule: MatNativeDateModule) {

    const queryString = window.location.search;

    const urlParamOne = new URLSearchParams(queryString);
    this.contactID = urlParamOne.get('cid');
  }

  ngOnInit(): void {
    this.editOrNew();
  }



  editOrNew() {
    if (this.eventToEdit) {
      this.eventName = this.eventToEdit.name;
      this.eventBody = this.eventToEdit.body;
      this.eventDate = this.eventToEdit.trigger.date;
    }
  }


  getCurrentUser() {
    this.userID = sessionStorage.id;
  }


  saveForm() {
    this.getCurrentUser();
    if (!this.eventName) {
      alert('Event name required');
    }
    if (!this.eventDate) {
      alert('Event date required');
    }
    if (!this.eventBody) {
      alert('Event body required');
    }
    else {
      let formData = new FormData();

      formData.append('name', this.eventName ? this.eventName : '');
      formData.append('body', this.eventBody ? this.eventBody : '');
      formData.append('date', this.eventDate ? this.eventDate : '');
      formData.append('contactID', this.contactID ? this.contactID : '');
      formData.append('userID', this.userID);


      let eventID = false;
      let masterID = '0';

      if (typeof this.eventToEdit === 'object') {
        eventID = this.eventToEdit.id;
        if(this.eventToEdit.id === masterID) {
          eventID = false;
        }
      }
      console.log(formData)

      this.eventsService.saveEvent(formData, eventID);
      this.snackBar.open('Saved', 'X', {
        duration: 4000
      });
      this.router.navigate(['UserEvents']);
    }


  }
}
