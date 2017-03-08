import {Component, Input} from '@angular/core';

@Component({
    selector: 'user-avatar-button',
    template: `
        <button md-icon-button>
            <img src="{{image}}">
        </button>
    `,
    styles: [`
        button img {
            border-radius: 50%;
            width: 40px;
            height: 40px;
        }
    `]
})
export class UserAvatarButton {

    @Input() image: string;

}