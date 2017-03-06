import { Component, Input } from '@angular/core';
import { GoogleAccount } from 'meteor/accounts/google';

@Component({
  selector: 'google-profile-item',
  template: `
    <md-list-item>
        <img md-list-avatar src="{{googleAccount.picture}}">
        <h3 md-line>{{googleAccount.name}}</h3>
        <p md-line>
            {{googleAccount.email}}
        </p>
    </md-list-item>
  `
})
export class GoogleProfileCardComponent {
  
  @Input() googleAccount: GoogleAccount;
  
}
