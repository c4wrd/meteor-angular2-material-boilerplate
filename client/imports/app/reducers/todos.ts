import { Todo } from '@shared:models';

import * as fromTodos from "@app:actions/todos";

export interface State {
    todos: Todo[];
}

const initialState: State = {
    todos: []
}

export function reducer(state = initialState, action: fromTodos.Actions): State {
    switch ( action.type ) {
        case fromTodos.ActionTypes.TODO_COLLECTION_UPDATED: {
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