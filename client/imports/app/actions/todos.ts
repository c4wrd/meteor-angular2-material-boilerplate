import { Action } from '@ngrx/store';
import { Todo } from '@shared:models';
import { type } from "../util";

export const ActionTypes = {
    TODO_ADD: type("TODO_ADD"),
    TODO_LOAD_FROM_COLLECTION: type("TODO_LOAD_FROM_COLLECTION"),
    TODO_TOGGLE_COMPLETE: type("TOGGLE_TODO_COMPLETE"),
    TODO_COLLECTION_UPDATED: type("TODO_COLLECTION_UPDATED")
}

export class AddTodoAction implements Action {
    type = ActionTypes.TODO_ADD;
    constructor(public payload: String) {}
}

export class ToggleTodoCompleteAction implements Action {
    type = ActionTypes.TODO_TOGGLE_COMPLETE;
    constructor(public payload: Todo) {}
}

export class TodoCollectionUpdatedAction implements Action {
    type = ActionTypes.TODO_COLLECTION_UPDATED;
    constructor(public payload: Todo[]) {}
}

export class LoadTodosAction implements Action {
    type = ActionTypes.TODO_LOAD_FROM_COLLECTION;
    constructor() {}
}

export type Actions = AddTodoAction | ToggleTodoCompleteAction | TodoCollectionUpdatedAction;