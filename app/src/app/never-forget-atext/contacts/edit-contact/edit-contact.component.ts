import {Component, Input, OnInit} from '@angular/core';
import {ContactService} from "../../../utilities/services/neverForgetAText/contact.service";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  public contactID: any;
  public contactToEdit: any;


  constructor(private contactService: ContactService) {
    const queryString = window.location.search;

    const urlParamOne = new URLSearchParams(queryString);
    this.contactID = urlParamOne.get('cid');
  }





  ngOnInit() {
    this.getContact();
  }

  async getContact() {
    this.contactToEdit = await this.contactService.getContact(this.contactID);
  }

}
