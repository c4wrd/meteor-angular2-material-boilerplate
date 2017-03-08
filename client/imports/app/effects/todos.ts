import { Observer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Tracker } from "meteor/tracker";

import { TodoService } from '@app:services';
import { Todo } from '@shared:models';
import * as Todos from "@actions/todos";
import { toAction } from "../util";

@Injectable()
export class TodoEffects {
    constructor(
        private actions$: Actions,
        public todoService: TodoService
    ) { }

    @Effect() getTodos$ = this.todoService
        .getTodos()
        .map((todos: Todo[]) => new Todos.TodoCollectionUpdatedAction(todos));

    @Effect() $addTodo = this.actions$
        .ofType(Todos.ActionTypes.TODO_ADD)
        .map(toPayload)
        .switchMap(task => this.todoService.createTodo(task))
            .map(id => toAction(Todos.ActionTypes.TODO_ADD_SUCCESS, id))
            .catch(() => Observable.of(toAction(Todos.ActionTypes.TODO_ADD_FAILURE)));

    @Effect({dispatch: false}) $toggleTodoCompletion = this.actions$
        .ofType(Todos.ActionTypes.TODO_TOGGLE_COMPLETE)
        .map(toPayload)
        .switchMap((todo: Todo) => this.todoService.toggleTodo(todo))
            .map(() => toAction("TODO_EDIT_SUCCESS"));

}