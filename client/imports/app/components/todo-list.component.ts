import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '@shared:models';

@Component({
    selector: 'todo-list',
    template: `
    <md-list>
        <todo-item *ngFor="let todo of todos"
            [todo]="todo"
            (click)="todoItemClicked(todo)">
        </todo-item>
    </md-list>
    `
})
export class TodoListComponent {
    
    @Input() todos: Todo[];

    @Output() todoItemClicked: EventEmitter<Todo>;

}