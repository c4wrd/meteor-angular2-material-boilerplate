import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser";

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { TodoService } from "@app:services";
import { TodoComponent, TodoManagerComponent, UserCardListComponent } from "@app:components";
import { AppComponent } from "./app.component";

import { Accounts } from "meteor/accounts-base";
import { AccountsModule } from "angular2-meteor-accounts-ui"

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    TodoComponent,
    TodoManagerComponent,
    UserCardListComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    TodoService
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AccountsModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
