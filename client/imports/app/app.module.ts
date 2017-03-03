import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser";

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { Accounts } from "meteor/accounts-base";
import {AccountsModule} from "angular2-meteor-accounts-ui"

import { TodoService } from "@app:services";
import { TodoComponent, 
         TodoManagerComponent, 
         UserCardListComponent,
         LoginComponent } from "@app:components";
import { AppComponent } from "./app.component";

import {AuthGuard} from "angular2-meteor-accounts-ui";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: "login",
    pathMatch: "full", 
    component: LoginComponent
  },
  {
    path: "todos",
    pathMatch: "full",
    component: TodoManagerComponent,
    canActivate: [AuthGuard​​]
  }
]

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    TodoComponent,
    TodoManagerComponent,
    UserCardListComponent,
    LoginComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    TodoService,
    AuthGuard
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AccountsModule,
    RouterModule.forRoot(routes)
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
