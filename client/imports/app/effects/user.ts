import { Observer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Tracker } from "meteor/tracker";

import { UserServive } from '@app:services';
import * as fromUser from "@actions/user";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private userService: UserServive
    ) { }

    @Effect() loadUser$ = this.actions$
        .ofType(fromUser.ActionTypes.LOAD_USER)
        .switchMap(() => {
            return this.userService.getUser()
        })
        .map(user => ({ type: fromUser.ActionTypes.USER_DATA, payload: user }))

    @Effect({dispatch: false}) login$ = this.actions$
        .ofType(fromUser.ActionTypes.LOGIN)
        .switchMap(() => {
            return Observable.fromPromise(this.userService.login())
        })
            .map(user => ({ type: fromUser.ActionTypes.LOGIN_SUCCEEDED }))
            .catch(() => Observable.of({ type: fromUser.ActionTypes.LOGIN_FAILED }));

    @Effect({dispatch: false}) logout$ = this.actions$
        .ofType(fromUser.ActionTypes.LOGOUT)
        .switchMap(() => {
            return Observable.fromPromise(this.userService.logout())
        })
            .map(result => ({ type: fromUser.ActionTypes.LOGOUT_SUCCEEDED }))
            .catch(() => Observable.of({ type: fromUser.ActionTypes.LOGOUT_FAILED }))
}