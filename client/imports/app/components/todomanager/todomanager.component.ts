import { Component } from '@angular/core';
import { Observable } from "rxjs";
import template from "./todomanager.component.html";
import style from "./todomanager.component.scss";

import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { Todo } from "@shared:models";
import { TodoService } from "@app:services";

@Component({
    selector: 'todo-manager',
    template: template,
    styles: [style]
})
export class TodoManagerComponent {

    todos: Observable<Todo[]>;
    taskModel: string;
    
    constructor(public todoService: TodoService, public snackbar: MdSnackBar) {
        this.todos = todoService.getTodos();
    }

    toggleTodo(todo: Todo) {
        this.todoService.toggleTodo(todo);
    }

    onSubmit() {
        if ( this.taskModel.length > 0 ) {
            this.todoService.createTodo(this.taskModel);
            this.snackbar.open("Created todo!", undefined, {
                duration: 2000
            })
            this.taskModel = '';
        }
    }

}
