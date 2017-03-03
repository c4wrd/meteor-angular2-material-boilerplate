import { Component, Input } from '@angular/core';
import { GoogleAccount } from 'meteor/accounts/google';

import template from "./user-card.template.html";

@Component({
  selector: 'user-card-list-item',
  template
})
export class UserCardListComponent {
  
  @Input() user: GoogleAccount;
  
}