import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import * as fromLayout from './layout';
import * as fromTodos from './todos';

export interface State {
    layout: fromLayout.State,
    todos: fromTodos.State
}

const reducers = {
    layout: fromLayout.reducer
}

export function reducer(state: any, action: any) {
    return combineReducers(reducers);
}



/**
 * Layout reducer state selectors
 */
export const getLayoutState = (state: State) => state.layout;
export const getTodosState = (state: State) => state.todos;

export const getSidenavOpen = createSelector(getLayoutState, fromLayout.getSidenavOpen);
export const getTodos = createSelector(getTodosState, fromTodos.getTodos);