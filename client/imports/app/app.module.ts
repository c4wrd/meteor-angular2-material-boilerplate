import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser";

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { Accounts } from "meteor/accounts-base";
import { AccountsModule } from "angular2-meteor-accounts-ui"

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { RouterStoreModule } from "@ngrx/router-store";
import { RouterModule } from '@angular/router';

import { ComponentsModule } from './components';
import { AuthEffects } from './effects/user';
import { TodoEffects } from './effects/todos';

import { TodoService, UserService } from "@app:services";
import { reducer } from './reducers';
import { routes } from './routes';

import { AppComponent } from "./containers/app.container"
import { TodoManagerPage } from './containers/todo-manager.page';

const store = StoreModule.provideStore(reducer);

@NgModule({
  imports: [
    ComponentsModule,
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(TodoEffects),
    AccountsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter()
  ],
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    TodoManagerPage
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    TodoService,
    UserService
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
