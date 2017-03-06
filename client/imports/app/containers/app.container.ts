import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../reducers';
import * as layout from '@actions/layout';
import * as user from "@actions/user";


@Component({
  selector: 'app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-layout>
      <app-sidenav [open]="showSidenav$ | async">
        <p>sidenav</p>
      </app-sidenav>
      <app-toolbar (menuClick)="toggleSidenav()">
        Material Todo Manager
      </app-toolbar>
      <router-outlet></router-outlet>
    </app-layout>
  `
})
export class AppComponent {
  showSidenav$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.store.dispatch(new user.LoadUserAction());
    this.showSidenav$ = this.store.select(fromRoot.getSidenavOpen);
  }

  toggleSidenav() {
    this.store.dispatch(new layout.ToggleSideNavAction());
  }
}