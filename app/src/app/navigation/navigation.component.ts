import {Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  public isMasterUser() {
    let user = sessionStorage.id;

    if (user == 0) {
      return true;
    } else {
      return false;
    }
  }
}
