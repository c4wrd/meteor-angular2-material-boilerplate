import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../reducers';
import * as layout from '@actions/layout';
import * as user from "@actions/user";


@Component({
  selector: 'app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-sidenav-container fullscreen>
      <app-toolbar (menuClick)="toggleSidenav()">
          Material Todo Manager
      </app-toolbar>
      <md-sidenav mode="side" [opened]="showSidenav$ | async">
        <google-profile-item 
            *ngIf="userLoggedIn$ | async" 
            [googleAccount]="(user$ | async)?.services.google"></google-profile-item>
      </md-sidenav>
      <router-outlet></router-outlet>
    </md-sidenav-container>
  `
})
export class AppComponent {
  showSidenav$: Observable<boolean>;
  userLoggedIn$: Observable<boolean>;
  user$: Observable<Meteor.User>;

  constructor(private store: Store<fromRoot.State>) {
    this.store.dispatch(new user.LoadUserAction());
    this.showSidenav$ = this.store.select(fromRoot.getSidenavOpen);
    this.userLoggedIn$ = this.store.select(fromRoot.getIsUserLoggedIn);
    this.user$ = this.store.select(fromRoot.getUser);
  }

  toggleSidenav() {
    this.store.dispatch(new layout.ToggleSideNavAction());
  }
}