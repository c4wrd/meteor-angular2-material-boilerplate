import { Observer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { go } from '@ngrx/router-store';

import { UserService } from '@app:services';
import { toAction } from '@app:utils';
import { AuthActionType, AuthActions, AuthActionTypes } from './actions';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    @Effect() $loadUser = this.userService.getUser()
        .map(user => new AuthActions.UserDataAction(user));

    @Effect() $login = this.actions$
        .ofType(AuthActionTypes.LOGIN)
        .switchMap(() => {
            return Observable.fromPromise(this.userService.login());
        })
            .map(user => (toAction(AuthActionTypes.LOGIN_SUCCESS)))
            .catch(() => Observable.of(toAction(AuthActionTypes.LOGIN_FAILED)));

    @Effect() $loginSuccessRedirect = this.actions$
        .ofType(AuthActionTypes.LOGIN_SUCCESS)
        .map(() => go(['']));

    @Effect() $logout = this.actions$
        .ofType(AuthActionTypes.LOGOUT)
        .switchMap(() => {
            return Observable.fromPromise(this.userService.logout());
        })
            .map(() => toAction(AuthActionTypes.LOGOUT_SUCCESS))
            .catch(() => Observable.of(toAction(AuthActionTypes.LOGOUT_FAILED)));

    @Effect() $logoutSuccessRedirect = this.actions$
        .ofType(AuthActionTypes.LOGOUT_SUCCESS)
        .map(() => go(['login']));
}