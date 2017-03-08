import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from '@angular/router';

import { SidenavItemComponent } from './sidenav-item.component';
import { SidenavComponent } from './sidenav.component';
import { TodoItemComponent } from './todo-item.component';
import { TodoAddFormComponent } from "./todo-add-form.component";
import { TodoListComponent } from './todo-list.component';
import { GoogleProfileCardComponent } from './google-profile-card.component';
import { UserAvatarButton } from './user-avatar-button.component';


export const COMPONENTS = [
  SidenavItemComponent,
  SidenavComponent,
  TodoListComponent,
  TodoItemComponent,
  TodoAddFormComponent,
  GoogleProfileCardComponent,
  UserAvatarButton
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule.forRoot()
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }