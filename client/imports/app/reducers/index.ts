import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import * as fromLayout from './layout';

export interface State {
    layout: fromLayout.State
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

export const getSidenavOpen = createSelector(getLayoutState, fromLayout.getSidenavOpen);