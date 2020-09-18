import {Router} from "@angular/router";
import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from "../utilities/services/neverForgetAText/auth.service";
import {subscribeOn} from "rxjs/operators";
import {SessionService} from "../utilities/services/neverForgetAText/session.service";
import {Store} from "@ngrx/store";
import * as fromRoot from "../store/reducers";
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public isUserLoggedIn: any;
  public profile: any;


  constructor(private router: Router,
              private authService: AuthService,
              private sessionService: SessionService,
              private store: Store
  ) {
  }

  ngOnInit(): void {
    this.isUserLoggedIn = this.authService.canActivate();
    this.getUser();
  }

  ngOnDestroy(): void {
    this.profile.unsubscribe;
}

  public logout() {
    this.sessionService.clearStore();
    this.authService.canActivate();
  }

  private getUser() {
    this.store.select(fromRoot.getProfile)
      .subscribe(profile => {
      this.profile = profile;
    });
  }
}
