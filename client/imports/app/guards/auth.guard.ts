import { Injectable } from  '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { go } from '@ngrx/router-store'
import { Store } from '@ngrx/store';
import { Observable, Observer } from 'rxjs';
import { Meteor } from 'meteor/meteor';

import * as fromRoot from '../reducers';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<fromRoot.State>) {}

    canActivate(): Observable<boolean> {
        return Observable.create((observer: Observer<boolean>) => {
            Tracker.autorun((comp) => {
                if (!Meteor.loggingIn()) {
                    let hasUser = !!Meteor.user();
                    if ( hasUser ) {
                        observer.next(true);
                    } else {
                        this.store.dispatch(go(["/login"]))
                        observer.next(false);
                    }
                   observer.complete();
                   comp.stop(); 
                }
            });
        });
    }

}