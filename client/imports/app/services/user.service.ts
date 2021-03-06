import { MeteorComponent, MeteorReactive } from 'angular2-meteor';
import { Injectable } from "@angular/core";
import { Observable, Observer, BehaviorSubject } from "rxjs";
import { ObservableCursor } from "meteor-rxjs";
import { Tracker } from 'meteor/tracker';

import { Meteor } from "meteor/meteor";

@Injectable()
export class UserService extends MeteorReactive {

    private user$ = new BehaviorSubject<Meteor.User>(null);

    /**
     * Meteor computation that is auto-updated
     * and dispatched to our store.
     */
    private computation: Tracker.Computation;

    constructor() {
        super();
        this.computation = this.autorun(() => {
            const user = Meteor.user();
            this.user$.next(user);
        });
    }

    getUser(): Observable<Meteor.User> {
        return this.user$.asObservable();
    }

    login(): Promise<Meteor.User> {
        return new Promise<Meteor.User>((resolve, reject) => {
            Meteor.loginWithGoogle(undefined, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(Meteor.user());
                }
            })
        });
    }

    logout(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            Meteor.logout((err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            })
        })
    }

}
