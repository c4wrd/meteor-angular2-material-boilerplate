import { Todo } from '@shared:models';

import { TodoActionType, TodoActionTypes } from './actions';

export interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: []
}

export function todoReducer(state = initialState, action: TodoActionType): TodoState {
    switch ( action.type ) {
        case TodoActionTypes.TODO_COLLECTION_UPDATED: {
            let todos = action.payload as Todo[];
            return {
                todos: todos
            }
        }
        default:
            return state;
    }
}

export const getTodos = (state: TodoState) => state.todos;