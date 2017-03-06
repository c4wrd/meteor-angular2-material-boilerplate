import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import * as fromTodos from '@actions/todos';
import { Todo } from '@shared:models';
import * as todos from '@actions/todos';


@Component({
  selector: 'todo-manager-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="todo-manager-container" fxLayout="column" fxLayoutAlign="start center">
        <md-card>
            <md-card-title>Todo Manager</md-card-title>
            <todo-add-form (addTodo)="addTodo($event)"></todo-add-form>
            <todo-list 
                [todos]="todos$ | async"
                (todoClicked)="todoItemClicked($event)">
            </todo-list>
        </md-card>
    </div>
  `,
  /**
   * Container components are permitted to have just enough styles
   * to bring the view together. If the number of styles grow,
   * consider breaking them out into presentational
   * components.
   */
  styles: [`
    md-card-title {
      display: flex;
      justify-content: center;
    }

    md-card {
        padding-left: 50px;
        padding-right: 50px;
    }

    .todo-manager-container {
        padding-left: 50px;
        padding-right: 50px;
        margin: 8px;
    }
  `]
})
export class TodoManagerPage {

  todos$: Observable<Todo[]>;

  constructor(public store: Store<fromRoot.State>) {
    this.todos$ = store.select(fromRoot.getTodos);
  }

  todoItemClicked(todo: Todo) {
      this.store.dispatch(new fromTodos.ToggleTodoCompleteAction(todo));
  }

  addTodo(todo: string) {
      this.store.dispatch(new fromTodos.AddTodoAction(todo));
  }

}