import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../utilities/services/neverForgetAText/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
