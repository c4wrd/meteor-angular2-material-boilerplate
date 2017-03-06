import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `
    <md-sidenav 
      mode="over" 
      [opened]="push">
      <md-nav-list>
        <ng-content></ng-content>
      </md-nav-list>
    </md-sidenav>
  `
})
export class SidenavComponent {
  @Input() open = true;
}