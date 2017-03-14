import { Action } from '@ngrx/store';
import { Todo } from '@shared:models';
import { type } from "@app:utils";

export const TodoActionTypes = {
    TODO_ADD: type("TODO_ADD"),
    TODO_ADD_SUCCESS: type("TODO_ADD_SUCCESS"),
    TODO_ADD_FAILURE: type("TODO_ADD_FAILURE"),
    TODO_TOGGLE_COMPLETE: type("TODO_TOGGLE_COMPLETE"),
    TODO_LOAD_FROM_COLLECTION: type("TODO_LOAD_FROM_COLLECTION"),
    TODO_COLLECTION_UPDATED: type("TODO_COLLECTION_UPDATED")
}

export class AddTodoAction implements Action {
    type = TodoActionTypes.TODO_ADD;
    constructor(public payload: String) {}
}

export class ToggleTodoCompleteAction implements Action {
    type = TodoActionTypes.TODO_TOGGLE_COMPLETE;
    constructor(public payload: Todo) {}
}

export class TodoCollectionUpdatedAction implements Action {
    type = TodoActionTypes.TODO_COLLECTION_UPDATED;
    constructor(public payload: Todo[]) {}
}

export class LoadTodosAction implements Action {
    type = TodoActionTypes.TODO_LOAD_FROM_COLLECTION;
    constructor(public payload: any = undefined) {}
}

export class TodoAddSucessAction implements Action {
    type = TodoActionTypes.TODO_ADD_SUCCESS;
    constructor(public payload: any = undefined) {}
}

export class TodoAddFailureAction implements Action {
    type = TodoActionTypes.TODO_ADD_FAILURE;
    constructor(public payload: any = undefined) {}
}

export type TodoActionType = AddTodoAction 
    | ToggleTodoCompleteAction
    | TodoCollectionUpdatedAction 
    | TodoAddSucessAction 
    | TodoAddFailureAction
;

export const TodoActions = {
    AddTodoAction,
    ToggleTodoCompleteAction,
    TodoCollectionUpdatedAction,
    LoadTodosAction,
    TodoAddFailureAction
}