import { Component } from '@angular/core';
import { Observable } from "rxjs";
import template from "./todomanager.component.html";
import style from "./todomanager.component.scss";

import { Todo } from "@models";
import { TodoService } from "@services";

@Component({
    selector: 'todo-manager',
    template: template,
    styles: [style]
})
export class TodoManagerComponent {

    todos: Observable<Todo[]>;
    taskModel: string;
    
    constructor(public todoService: TodoService) {
        this.todos = todoService.getTodos();
    }

    toggleTodo(todo: Todo) {
        this.todoService.toggleTodo(todo);
    }

    onSubmit() {
        if ( this.taskModel.length > 0 ) {
            this.todoService.createTodo(this.taskModel);
            this.taskModel = '';
        }
    }

}
