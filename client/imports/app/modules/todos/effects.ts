import { Observer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Tracker } from "meteor/tracker";

import { TodoService } from '@app:services';
import { toAction } from "@app:utils";

import { Todo } from '@shared:models';
import { TodoCollectionUpdatedAction, TodoActionTypes } from "./actions";

@Injectable()
export class TodoEffects {
    constructor(
        private actions$: Actions,
        public todoService: TodoService
    ) { }

    @Effect() getTodos$ = this.todoService
        .getTodos()
        .map((todos: Todo[]) => new TodoCollectionUpdatedAction(todos));

    @Effect() $addTodo = this.actions$
        .ofType(TodoActionTypes.TODO_ADD)
        .map(toPayload)
        .switchMap(task => this.todoService.createTodo(task))
            .map(id => toAction(TodoActionTypes.TODO_ADD_SUCCESS, id))
            .catch(() => Observable.of(toAction(TodoActionTypes.TODO_ADD_FAILURE)));

    @Effect({dispatch: false}) $toggleTodoCompletion = this.actions$
        .ofType(TodoActionTypes.TODO_TOGGLE_COMPLETE)
        .map(toPayload)
        .switchMap((todo: Todo) => this.todoService.toggleTodo(todo))
            .map(() => toAction("TODO_EDIT_SUCCESS"));

}