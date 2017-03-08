import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser";

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { Accounts } from "meteor/accounts-base";
import { AccountsModule } from "angular2-meteor-accounts-ui"
import { METEOR_PROVIDERS, MeteorReactive } from 'angular2-meteor';

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { RouterStoreModule } from "@ngrx/router-store";
import { RouterModule } from '@angular/router';

import { ComponentsModule } from './components';
import { AuthGuard } from './guards/auth.guard';
import { AuthEffects } from './effects/user';
import { TodoEffects } from './effects/todos';

import { TodoService, UserService } from "@app:services";
import { reducer } from './reducers';
import { routes } from './routes';

import { AppComponent, APP_CONTAINER_DECLARATIONS } from "./containers/app-container";
import { TodoManagerPage } from './containers/todo-manager.page';
import { LoginPage } from './containers/login.page';

const store = StoreModule.provideStore(reducer);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AccountsModule,
    StoreModule.provideStore(reducer),
    RouterModule.forRoot(routes, { useHash: true }),
    RouterStoreModule.connectRouter(),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(TodoEffects),
    ComponentsModule
  ],
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    TodoManagerPage,
    LoginPage,
    APP_CONTAINER_DECLARATIONS
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    TodoService,
    UserService,
    AuthGuard,
    METEOR_PROVIDERS
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
