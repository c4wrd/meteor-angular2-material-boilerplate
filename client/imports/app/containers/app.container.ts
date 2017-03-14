import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GoogleAccount } from "meteor/accounts/google";

import * as fromRoot from '@app/modules';
import * as Layout from '@app/modules/layout';
import * as Auth from "@app/modules/auth";

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
      <app-toolbar-container [title]="'Material Todo Manager'"></app-toolbar-container>
      <router-outlet></router-outlet>
    </md-sidenav-container>
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
export class AppContainer {

  showSidenav$: Observable<boolean>;
  userLoggedIn$: Observable<boolean>;
  user$: Observable<Meteor.User>;
  googleProfile$: Observable<GoogleAccount>;

  constructor(private store: Store<fromRoot.State>) {
    this.store.dispatch(new Auth.LoadUserAction());
    this.showSidenav$ = this.store.select(fromRoot.getSidenavOpen);
    this.userLoggedIn$ = this.store.select(fromRoot.getIsUserLoggedIn);
    this.googleProfile$ = this.store.select(fromRoot.getGoogleProfile);
    this.user$ = this.store.select(fromRoot.getUser);
  }

  toggleSidenav() {
    this.store.dispatch(new Layout.ToggleSideNavAction());
  }

  logout() {
    this.store.dispatch(new Auth.LogoutUserAction());
  }
}