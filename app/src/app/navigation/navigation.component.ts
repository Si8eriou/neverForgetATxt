import {Router} from "@angular/router";
import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from "../utilities/services/neverForgetAText/auth.service";
import {subscribeOn} from "rxjs/operators";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public user: any;
  public userName: any;


  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userName = sessionStorage.user;
    this.user = this.authService.canActivate();
  }

  ngOnDestroy(): void {
    this.user.unsubscribe;
}

  public logout() {
    sessionStorage.clear();
    this.authService.canActivate();
    this.router.navigate(['login']);
  }
}
