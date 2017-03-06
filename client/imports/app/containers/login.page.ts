import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { go, replace, search, show, back, forward } from '@ngrx/router-store';
import { Observable } from 'rxjs';
import { Meteor } from "meteor/meteor";

import { UserService } from "@app:services";
import * as user from "@actions/user";
import * as fromRoot from '../reducers';

@Component({
  selector: 'login-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="login-container">
      <md-card>
        <md-card-title>Login</md-card-title>
        <md-card-subtitle>Please login to use this application</md-card-subtitle>
          <md-card-content>
            {{ error$ | async }}
          </md-card-content>
          <md-card-actions>
              <button md-button (click)="login()">Login with Google</button>
          </md-card-actions>
      </md-card>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    md-card-actions {
      display: flex;
      justify-content: center;
    }

    md-card-title {
      display: flex;
      justify-content: center;
    }
  `]
})
export class LoginPage {

  error$: Observable<String>;
  user$: Observable<Meteor.User>;

  constructor(private store: Store<fromRoot.State>, userService: UserService) {
    this.error$ = store.select(fromRoot.getAuthError);
    this.user$ = userService.getUser()
      .filter(user => !!user)
      .do(() => {
        this.store.dispatch(go(['/']))
      });
  }

  login() {
    this.store.dispatch(new user.LoginUserAction());
  }

}