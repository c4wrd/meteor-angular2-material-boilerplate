import { Component, Input } from '@angular/core';
import { Todo } from '@shared:models';


@Component({
  selector: 'todo-item',
  template: `
    <md-list-item>
        <span md-line>{{ todo.task }}</span>
        <span md-line class="secondary">Completed: {{ todo.completed }}</span>
    </md-list-item>
  `
})
export class TodoItemComponent {

    @Input() todo: Todo;

 }