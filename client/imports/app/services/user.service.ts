import { MeteorComponent } from 'angular2-meteor/dist/main';
import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { ObservableCursor } from "meteor-rxjs";
import { Tracker } from 'meteor/tracker';

import { Meteor } from "meteor/meteor";

@Injectable()
export class UserServive extends MeteorComponent {

    private user: Observable<Meteor.User>;
    private computation: Tracker.Computation;

    constructor() {
        super();
        this.user = Observable.create((observer: Observer<Meteor.User>) => {
            this.computation = this.autorun(() => {
                const user = Meteor.user();
                observer.next(user);
            });
        });
    }

    getUser(): Observable<Meteor.User> {
        return this.user;
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
