import { Observer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { go } from '@ngrx/router-store';

import { UserService } from '@app:services';
import { toAction } from '../util';
import * as User from "@actions/user";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    @Effect() $loadUser = this.userService.getUser()
        .map(user => new User.UserDataAction(user));

    @Effect() $login = this.actions$
        .ofType(User.ActionTypes.LOGIN)
        .switchMap(() => {
            return Observable.fromPromise(this.userService.login());
        })
            .map(user => (toAction(User.ActionTypes.LOGIN_SUCCESS)))
            .catch(() => Observable.of(toAction(User.ActionTypes.LOGIN_FAILED)));

    @Effect() $loginSuccessRedirect = this.actions$
        .ofType(User.ActionTypes.LOGIN_SUCCESS)
        .map(() => go(['']));

    @Effect() $logout = this.actions$
        .ofType(User.ActionTypes.LOGOUT)
        .switchMap(() => {
            return Observable.fromPromise(this.userService.logout());
        })
            .map(() => toAction(User.ActionTypes.LOGOUT_SUCCESS))
            .catch(() => Observable.of(toAction(User.ActionTypes.LOGOUT_FAILED)));

    @Effect() $logoutSuccessRedirect = this.actions$
        .ofType(User.ActionTypes.LOGOUT_SUCCESS)
        .map(() => go(['login']));
}