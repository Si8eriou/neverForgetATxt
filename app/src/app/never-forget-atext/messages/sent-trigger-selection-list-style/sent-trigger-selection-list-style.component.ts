import {Component, Input, OnInit} from '@angular/core';
import {ContactService} from "../../../utilities/services/neverForgetAText/contact.service";
import {ContactElement} from "../../contacts/user-contacts/user-contacts.component";

@Component({
  selector: 'app-sent-trigger-selection-list-style',
  templateUrl: './sent-trigger-selection-list-style.component.html',
  styleUrls: ['./sent-trigger-selection-list-style.component.scss']
})
export class SentTriggerSelectionListStyleComponent implements OnInit {
  expandedContact: ContactElement | null;
  columnsToDisplay = ['name', 'Date'];
  columnsToDisplayNames = {
    'name' : 'Name',
    'date' : 'Date',
  }

  panelOpenState = false;
  @Input() contactTriggers;


  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    console.log(this.contactTriggers);
  }

  fixDate(epochTime) {
   let month =  new Date(epochTime).getMonth();
   let day =  new Date(epochTime).getDay();
   let year =  new Date(epochTime).getFullYear();

   return month + '-' + day + '-' + year;
  }

}
