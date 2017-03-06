import { Injectable } from  '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { go } from '@ngrx/router-store'
import { Store } from '@ngrx/store';
import { Observable, Observer } from 'rxjs';
import { Meteor } from 'meteor/meteor';

import * as fromRoot from '../reducers';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<fromRoot.State>) {
        
    }

    canActivate(): boolean {
        if (!!Meteor.user()) {
            return true;
        } else {
            this.store.dispatch(go(["/login"]))
            return false;
        }
    }

}