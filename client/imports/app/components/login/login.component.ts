import { Component } from "@angular/core";
import { Meteor } from 'meteor/meteor';

import template from "./login.template.html";

@Component({
  selector: "login-component",
  template
})
export class LoginComponent {

  error: any = null;

  login() {
    this.error = null;
    Meteor.loginWithGoogle({}, (err: Error) => {
      if ( err ) {
        this.error = err.message;
        console.log(err);
      } else {
        
      }
    });
  }

}
