import { Action } from '@ngrx/store';
import { Todo } from '@shared:models';

export const ActionTypes = {
    TODO_ADD: "TODO_ADD",
    TODO_TOGGLE_COMPLETE: "TOGGLE_TODO_COMPLETE"
}

export class AddTodoAction implements Action {
    type = ActionTypes.TODO_ADD;
    constructor(public payload: String) {}
}

export class ToggleTodoCompleteAction implements Action {
    type = ActionTypes.TODO_TOGGLE_COMPLETE;
    constructor(public payload: Todo) {}
}

export type Actions = AddTodoAction | ToggleTodoCompleteAction;