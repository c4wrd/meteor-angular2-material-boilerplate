import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { Accounts } from "meteor/accounts-base";
import { AccountsModule } from "angular2-meteor-accounts-ui"
import { METEOR_PROVIDERS, MeteorReactive } from 'angular2-meteor';

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { RouterStoreModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ComponentsModule } from './components';
import { AuthGuard } from './guards/auth.guard';
import { TodoEffects, AuthEffects } from '@app/modules/effects';

import { TodoService, UserService } from "@app:services";
import { RootReducer } from '@app/modules';
import { routes } from './routes';

import { AppContainer, AppToolbarContainer, TodoManagerContainer, LoginContainer } from './containers';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AccountsModule,
    StoreModule.provideStore(RootReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    RouterModule.forRoot(routes, { useHash: true }),
    RouterStoreModule.connectRouter(),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(TodoEffects),
    ComponentsModule
  ],
  // Components, Pipes, Directive
  declarations: [
    AppContainer,
    LoginContainer,
    TodoManagerContainer,
    AppToolbarContainer
  ],
  // Entry Components
  entryComponents: [
    AppContainer
  ],
  // Providers
  providers: [
    TodoService,
    UserService,
    AuthGuard,
    METEOR_PROVIDERS
  ],
  // Main Component
  bootstrap: [ AppContainer ]
})
export class AppModule {
}
