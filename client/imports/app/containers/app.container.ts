import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../reducers';
import * as layout from '@actions/layout';
import * as user from "@actions/user";
import {GoogleAccount} from "meteor/accounts/google";

@Component({
  selector: 'app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-sidenav-container fullscreen>
      <md-sidenav mode="side" [opened]="(showSidenav$ | async) && (userLoggedIn$ | async)">
        <md-nav-list>
          <md-list-item><h3>App Name</h3></md-list-item>
        </md-nav-list>
      </md-sidenav>
      <app-toolbar (menuClick)="toggleSidenav()">
          Material Todo Manager
          <div class="spacer"></div>
          <user-avatar-button *ngIf="userLoggedIn$ | async" [image]="(googleProfile$ | async)?.picture" [mdMenuTriggerFor]="userMenu"></user-avatar-button>
      </app-toolbar>
      <router-outlet></router-outlet>
    </md-sidenav-container>
    <md-menu #userMenu="mdMenu">
      <md-nav-list>
        <google-profile-item *ngIf="userLoggedIn$ | async" [googleAccount]="googleProfile$ | async"></google-profile-item>
        <md-list-item (click)="logout()">
          <h4 md-line>Logout</h4>
        </md-list-item>
      </md-nav-list>
    </md-menu>
  `,
  styles: [`
    md-sidenav {
      width: 300px;
    }

    .spacer {
      flex: 1 1 auto;
    }
  `]
})
export class AppComponent {

  showSidenav$: Observable<boolean>;
  userLoggedIn$: Observable<boolean>;
  user$: Observable<Meteor.User>;
  googleProfile$: Observable<GoogleAccount>;

  constructor(private store: Store<fromRoot.State>) {
    this.store.dispatch(new user.LoadUserAction());
    this.showSidenav$ = this.store.select(fromRoot.getSidenavOpen);
    this.userLoggedIn$ = this.store.select(fromRoot.getIsUserLoggedIn);
    this.googleProfile$ = this.store.select(fromRoot.getGoogleProfile);
    this.user$ = this.store.select(fromRoot.getUser);
  }

  toggleSidenav() {
    this.store.dispatch(new layout.ToggleSideNavAction());
  }

  logout() {
    this.store.dispatch(new user.LogoutUserAction());
  }
}