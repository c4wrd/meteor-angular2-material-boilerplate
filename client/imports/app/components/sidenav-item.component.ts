import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nav-item',
    template: `
    <md-list-item>
        <ng-content></ng-content>
    </md-list-item>
    `
})
export class SidenavItemComponent {
    
    clicked: Output = new EventEmitter();

}