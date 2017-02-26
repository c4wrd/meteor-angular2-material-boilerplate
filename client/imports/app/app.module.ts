import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser";

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { TodoService } from "@services";
import { TodoComponent, TodoManagerComponent } from "@components";
import { AppComponent } from "./app.component";

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    TodoComponent,
    TodoManagerComponent
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
    FlexLayoutModule.forRoot()
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
