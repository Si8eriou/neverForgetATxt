import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ContactService} from "../../../utilities/services/neverForgetAText/contact.service";
import {Router} from "@angular/router";
import {EventsService} from "../../../utilities/services/neverForgetAText/events.service";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from '@angular/material/select';
import {FormControl} from "@angular/forms";


interface EventRepeatTypes {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  public eventName: any;
  public eventBody: any;
  public eventDate: any;
  public userID: any;
  public contactID: any;
  public eventRepeatType: any;

  eventRepeatTypes: EventRepeatTypes[] = [
    {value: 1, viewValue: 'Day'},
    {value: 2, viewValue: 'Week'},
    {value: 3, viewValue: 'Month'},
    {value: 4, viewValue: '30 Days'},
    {value: 5, viewValue: 'Year'},
  ];

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
      this.eventName = this.eventToEdit.name ? this.eventToEdit.name : '';
      this.eventBody = this.eventToEdit.body ? this.eventToEdit.body : '';
      this.eventDate = this.eventToEdit.trigger.date ? this.eventToEdit.trigger.date : ''
      this.eventRepeatType = this.eventToEdit.repeat_type ? this.eventToEdit.repeat_type : '';
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
      formData.append('repeat_type', this.eventRepeatType ? this.eventRepeatType : '');


      let eventID = false;
      let masterID = '0';

      if (typeof this.eventToEdit === 'object') {
        eventID = this.eventToEdit.id;
        if(this.eventToEdit.id === masterID) {
          eventID = false;
        }
      }

      this.eventsService.saveEvent(formData, eventID);
      this.snackBar.open('Saved', 'X', {
        duration: 4000
      });
      this.router.navigate(['UserEvents']);
    }


  }
}
