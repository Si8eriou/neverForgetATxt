import {Component, Input, OnInit} from '@angular/core';
import {ContactService} from "../../../utilities/services/neverForgetAText/contact.service";

@Component({
  selector: 'app-sent-trigger-bubble-style',
  templateUrl: './sent-trigger-bubble-style.component.html',
  styleUrls: ['./sent-trigger-bubble-style.component.scss']
})
export class SentTriggerBubbleStyleComponent implements OnInit {
  @Input() contactTriggers;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

}
