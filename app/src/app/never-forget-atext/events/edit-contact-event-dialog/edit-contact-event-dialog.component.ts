import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ContactElement, DialogData} from "../../contacts/user-contacts/user-contacts.component";
import {FormBuilder} from "@angular/forms";
import {ContactService} from "../../../utilities/services/neverForgetAText/contact.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {EventsService} from "../../../utilities/services/neverForgetAText/events.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-edit-contact-event-dialog',
  templateUrl: './edit-contact-event-dialog.component.html',
  styleUrls: ['./edit-contact-event-dialog.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EditContactEventDialogComponent implements OnInit {
  public contactEvents: any;

  expandedEvent: ContactElement | null;
  columnsToDisplay = ['id', 'date'];
  columnsToDisplayNames = {
    'id' : 'Name',
    'date' : 'Date',
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public contact: DialogData,
    public formBuilder: FormBuilder,
    private contactService: ContactService,
    private snackBar: MatSnackBar,
    private router: Router,
    private eventsService: EventsService,
  ) { }

  ngOnInit(): void {
    this.getContactEvents();
  }


  async getContactEvents() {
    this.contactEvents = await this.eventsService.getContactEvents(this.contact['contact']['id']);
  }
}
