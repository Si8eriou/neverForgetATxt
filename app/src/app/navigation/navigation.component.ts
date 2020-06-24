import {Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public user: any;


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.user = sessionStorage.id;
  }

  public logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  public isMasterUser() {
    if (this.user == 0) {
      return true;
    } else {
      return false;
    }
  }
}
