import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { Meteor } from 'meteor/meteor';
import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { InjectUser } from "angular2-meteor-accounts-ui";

import template from "./app.component.html";
import style from "./app.component.scss";

@Component({
  selector: "app",
  template,
  styles: [ style ]
})
@InjectUser("user")
export class AppComponent {

  user: Meteor.User;
  error: any = null;

  constructor(public snackbar: MdSnackBar, public router: Router) {
  
  }
  
  login() {
    this.router.navigate(["login"]);
  }

  logout() {
    this.error = null;
    Meteor.logout((err: Error) => {
      if ( err ) {
        this.error = err.message;
        console.log(err);
      } else {
        const opts: MdSnackBarConfig = {
          duration: 2500
        }
        this.snackbar.open("Successfully logged out", null, opts);
      }
    });
  }

}
