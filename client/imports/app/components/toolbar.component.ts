import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    template: `
    <md-toolbar class="z-depth-1" color="primary">
        <button md-icon-button (click)="menuClick.emit()">
            <md-icon>menu</md-icon>
        </button>
        <ng-content></ng-content>
    </md-toolbar>
    `
})
export class ToolbarComponent {

    /**
     * When the menu button is clicked,
     * the output property 'menuClick' 
     * will emit an event.
     */
    @Output() menuClick = new EventEmitter();

}