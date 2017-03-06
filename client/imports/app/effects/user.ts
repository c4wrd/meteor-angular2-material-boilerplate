import { Observer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Tracker } from "meteor/tracker";

import * as fromUser from "@actions/user";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions
    ) { }

    @Effect() loadUser$ = this.actions$
        .ofType(fromUser.ActionTypes.LOAD_USER)
        .switchMap(() => {
            return Observable.create((observer: Observer<Meteor.User>) => {
                Tracker.autorun(() => {
                    observer.next(Meteor.user());
                });
            })
        })
        .map(user => ({ type: fromUser.ActionTypes.USER_DATA, payload: user }))

    @Effect() login$ = this.actions$
        .ofType(fromUser.ActionTypes.LOGIN)
        .switchMap(() => {
            return Observable.fromPromise(
                new Promise<Meteor.User>((resolve, reject) => {
                    Meteor.loginWithGoogle(undefined, (error) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(Meteor.user());
                        }
                    });
            }));
        })
        .map(user => ({ type: fromUser.ActionTypes.LOGIN_SUCCEEDED }))
        .catch(() => Observable.of({ type: fromUser.ActionTypes.LOGIN_FAILED }));

    @Effect() logout$ = this.actions$
        .ofType(fromUser.ActionTypes.LOGOUT)
        .switchMap(() => {
            return new Promise<void>((resolve, reject) => {
                Meteor.logout((err) => {
                    if (err) {
                        reject(err);
                    }
                    resolve();
                })
            })
        })
        .map(result => ({ type: fromUser.ActionTypes.LOGOUT_SUCCEEDED }))
        .catch(() => Observable.of({ type: fromUser.ActionTypes.LOGOUT_FAILED }))
}