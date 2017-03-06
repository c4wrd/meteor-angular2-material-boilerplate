import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '@shared:models';

@Component({
    selector: 'todo-list',
    template: `
    <md-list>
        <todo-item *ngFor="let todo of todos"
            [todo]="todo"
            (click)="todoClicked.emit(todo)">
        </todo-item>
    </md-list>
    `
})
export class TodoListComponent {
    
    @Input() todos: Todo[];

    @Output() todoClicked = new EventEmitter<Todo>();

}