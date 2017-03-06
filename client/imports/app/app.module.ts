import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser";

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { Accounts } from "meteor/accounts-base";
import { AccountsModule } from "angular2-meteor-accounts-ui"

import { StoreModule } from "@ngrx/store";
import { RouterStoreModule } from "@ngrx/router-store";
import { RouterModule } from '@angular/router';

import { ComponentsModule } from './components';
import { TodoService } from "@app:services";
import { AppComponent } from "./app.component";
import { reducer } from './reducers';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AccountsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter()
  ],
  // Components, Pipes, Directive
  declarations: [
    AppComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    TodoService
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
