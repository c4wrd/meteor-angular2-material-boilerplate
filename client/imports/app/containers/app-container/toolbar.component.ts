import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import {GoogleAccount} from "meteor/accounts/google";

import * as fromRoot from '@app:reducers';
import * as layout from '@app:actions/layout';
import * as user from "@app:actions/user";

@Component({
  selector: 'app-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-toolbar class="z-depth-1" color="primary">
        <button *ngIf="userLoggedIn$ | async" md-icon-button (click)="menuClick.emit()">
            <md-icon>menu</md-icon>
        </button>
        {{ title }}
        <div class="spacer"></div>
        <user-avatar-button *ngIf="userLoggedIn$ | async" [image]="(googleProfile$ | async)?.picture" [mdMenuTriggerFor]="userMenu"></user-avatar-button>
    </md-toolbar>
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
    .spacer {
      flex: 1 1 auto;
    }
  `]
})
export class AppToolbarComponent {

  @Input() title: string;

  userLoggedIn$: Observable<boolean>; 
  googleProfile$: Observable<GoogleAccount>;

  constructor(private store: Store<fromRoot.State>) {
    this.store.dispatch(new user.LoadUserAction());
    this.userLoggedIn$ = this.store.select(fromRoot.getIsUserLoggedIn);
    this.googleProfile$ = this.store.select(fromRoot.getGoogleProfile);
  }

  toggleSidenav() {
    this.store.dispatch(new layout.ToggleSideNavAction());
  }

  logout() {
    this.store.dispatch(new user.LogoutUserAction());
  }
  
}