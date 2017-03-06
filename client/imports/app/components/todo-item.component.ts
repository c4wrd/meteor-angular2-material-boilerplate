import { Component, Input } from '@angular/core';
import { Todo } from '@shared:models';


@Component({
  selector: 'todo-item',
  template: `
    <md-list-item>
        <md-icon md-list-avatar>{{ todo.completed ? "check": "cancel" }}</md-icon>
        <span md-line>{{ todo.task }}</span>
        <span md-line class="secondary">Completed: {{ todo.completed }}</span>
    </md-list-item>
  `,
  styles: [`
    md-list-item {
      user-select: none;
    }

    md-list-item:hover {
      background-color: #efefef;
      cursor: pointer;
      transition: 0.1s ease-in-out;
    }
  `]
})
export class TodoItemComponent {

    @Input() todo: Todo;

 }