export * from "./todo/todo.component";
export * from "./todomanager/todomanager.component";

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { SidenavItemComponent } from './sidenav-item.component';
import { SidenavComponent } from './sidenav.component';
import { TodoItemComponent } from './todo-item.component';
import { TodoAddFormComponent } from "./todo-add-form.component"
import { TodoListComponent } from './todo-list.component';
import { ToolbarComponent } from './toolbar.component';

export const COMPONENTS = [
  LayoutComponent,
  SidenavItemComponent,
  SidenavComponent,
  ToolbarComponent,
  TodoListComponent,
  TodoItemComponent,
  TodoAddFormComponent
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }