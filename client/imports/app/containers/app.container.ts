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
      <md-sidenav *ngIf="$userLoggedIn | async" mode="side" opened="{{showSidenav$ | async}}">
        <p>sidenav</p>
      </md-sidenav>
      <router-outlet></router-outlet>
    </md-sidenav-container>
  `
})
export class AppComponent {
  showSidenav$: Observable<boolean>;
  userLoggedIn$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.store.dispatch(new user.LoadUserAction());
    this.showSidenav$ = this.store.select(fromRoot.getSidenavOpen);
    this.userLoggedIn$ = this.store.select(fromRoot.getIsUserLoggedIn);
  }

  toggleSidenav() {
    this.store.dispatch(new layout.ToggleSideNavAction());
  }
}