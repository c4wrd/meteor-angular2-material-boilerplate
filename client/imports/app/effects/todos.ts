import { Observer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Tracker } from "meteor/tracker";

import { TodoService } from '@app:services';
import { Todo } from '@shared:models';
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

    @Effect() $addTodo = this.actions$
        .ofType(todos.ActionTypes.TODO_ADD)
        .map(toPayload)
        .switchMap(task => this.todoService.createTodo(task))
            .map(id => ({ type: todos.ActionTypes.TODO_ADD_SUCCESS }))
            .catch(() => Observable.of({type: todos.ActionTypes.TODO_ADD_FAILURE}))

    @Effect({dispatch: false}) $toggleTodoCompletion = this.actions$
        .ofType(todos.ActionTypes.TODO_TOGGLE_COMPLETE)
        .map(toPayload)
        .switchMap((todo: Todo) => this.todoService.toggleTodo(todo))
            .map((updatedCount) => ({type: "TODO_EDIT_SUCCESS"}))

}