import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { go, replace, search, show, back, forward } from '@ngrx/router-store';
import { Observable, Subscription } from 'rxjs';
import { Meteor } from "meteor/meteor";

import { UserService } from "@app:services";
import * as User from "@app/modules/auth";
import * as fromRoot from '@app/modules';

@Component({
  selector: 'login-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="login-container">
      <md-card fxLayout="column" fxLayoutAlign="center center">
        <md-card-title>Login</md-card-title>
        <md-card-subtitle>
          Please login to use this application
        </md-card-subtitle>
        <md-card-content>
          <!-- {{ error$ | async }} -->
        </md-card-content>
        <md-card-actions>
            <button md-button (click)="login()">Login with Google</button>
        </md-card-actions>
      </md-card>
    </div>
  `,
  styles: [`
    .login-container {
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    md-card {
      width: 300px;
    }
  `]
})
export class LoginContainer {

  error$: Observable<String>;
  user$: Subscription;

  constructor(private store: Store<fromRoot.State>, userService: UserService) {
    //this.error$ = store.select(fromRoot.getAuthError);
    this.user$ = userService.getUser()
      .subscribe((user) => {
          let hasUser = !!user;
          if (hasUser) {
            this.store.dispatch(go(['/']));
          }
      });
  }

  login() {
    this.store.dispatch(new User.LoginUserAction());
  }

}