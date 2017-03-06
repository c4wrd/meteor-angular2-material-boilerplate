import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import * as fromTodos from '@actions/todos';
import { Todo } from '@shared:models';


@Component({
  selector: 'todo-manager-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
      <md-card-title>Todo Manager</md-card-title>
    </md-card>
    <todo-add-form></todo-add-form>
    <todo-list 
        [todos]="todos$ | async"
        (todoItemClicked)="todoItemClicked($event)">
    </todo-list>
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
}