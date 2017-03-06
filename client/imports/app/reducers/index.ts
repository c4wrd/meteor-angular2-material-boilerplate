import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import * as fromLayout from './layout';
import * as fromTodos from './todos';
import * as fromAuth from './auth';

export interface State {
    layout: fromLayout.State;
    todos: fromTodos.State;
    auth: fromAuth.State;
    router: fromRouter.RouterState;
}

const reducers = {
    layout: fromLayout.reducer,
    todos: fromTodos.reducer,
    auth: fromAuth.reducer,
    router: fromRouter.routerReducer
}

let rootReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return rootReducer(state, action);
}

/**
 * Layout helpers
 */
export const getLayoutState = (state: State) => state.layout;
export const getSidenavOpen = createSelector(getLayoutState, fromLayout.getSidenavOpen);

/**
 * Todo helpers
 */
export const getTodosState = (state: State) => state.todos;
export const getTodos = createSelector(getTodosState, fromTodos.getTodos);

/**
 * Authentication helpers
 */
export const getAuthState = (state: State) => state.auth;
export const getAuthError = createSelector(getAuthState, fromAuth.getError);
export const getIsUserLoggedIn = createSelector(getAuthState, fromAuth.isUserLoggedIn);
export const getUser = createSelector(getAuthState, fromAuth.getUser);