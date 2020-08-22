import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bubble-style-messages',
  templateUrl: './bubble-style-messages.component.html',
  styleUrls: ['./bubble-style-messages.component.scss']
})
export class BubbleStyleMessagesComponent implements OnInit {
  @Input() messages;

  constructor() { }

  ngOnInit(): void {
  }

}
