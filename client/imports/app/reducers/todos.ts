import { Todo } from '@shared:models';

import * as todos from "@actions/todos";

export interface State {
    todos: Todo[];
}

const initialState: State = {
    todos: []
}

export function reducer(state = initialState, action: todos.Actions): State {
    switch ( action.type ) {
        case todos.ActionTypes.TODO_COLLECTION_UPDATED: {
            let todos = action.payload as Todo[];
            return {
                todos: todos
            }
        }
        default:
            return state;
    }
}

export const getTodos = (state: State) => state.todos;