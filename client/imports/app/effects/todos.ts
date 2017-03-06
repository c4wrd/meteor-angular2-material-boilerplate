import { Observer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Tracker } from "meteor/tracker";

import { TodoService } from '@app:services';
import * as todos from "@actions/todos";

@Injectable()
export class TodoEffects {
    constructor(
        private actions$: Actions,
        public todoService: TodoService
    ) { }

    @Effect() $loadTodos = this.actions$
        .ofType(todos.ActionTypes.TODO_LOAD_FROM_COLLECTION)
        .switchMap(() => {
            return this.todoService.getTodos()
        })
        .map(updatedTodos => ({ type: todos.ActionTypes.TODO_COLLECTION_UPDATED, payload: updatedTodos }))

}