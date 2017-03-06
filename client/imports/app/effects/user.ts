import { Observer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Tracker } from "meteor/tracker";

import { go } from '@ngrx/router-store';

import { UserService } from '@app:services';
import * as fromUser from "@actions/user";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    @Effect() loadUser$ = this.actions$
        .ofType(fromUser.ActionTypes.LOAD_USER)
        .switchMap(() => {
            return this.userService.getUser();
        })
        .map(user => ({ type: fromUser.ActionTypes.USER_DATA, payload: user }));

    @Effect() login$ = this.actions$
        .ofType(fromUser.ActionTypes.LOGIN)
        .switchMap(() => {
            return Observable.fromPromise(this.userService.login());
        })
            .map(user => (go([''])))
            .catch(() => Observable.of({ type: fromUser.ActionTypes.LOGIN_FAILED }));

    @Effect() logout$ = this.actions$
        .ofType(fromUser.ActionTypes.LOGOUT)
        .switchMap(() => {
            return Observable.fromPromise(this.userService.logout());
        })
            .map(_ => go(["login"]))
            .catch(() => Observable.of({ type: fromUser.ActionTypes.LOGOUT_FAILED }))
}