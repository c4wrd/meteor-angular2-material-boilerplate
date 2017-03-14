import { LayoutActionTypes, LayoutActionType } from './actions';

export interface LayoutState {
    sidenavOpen: boolean;
}

const initialState: LayoutState = {
    sidenavOpen: true
}

export function layoutReducer(state = initialState, action: LayoutActionType): LayoutState {
    switch ( action.type ) {
        case LayoutActionTypes.SIDENAV_TOGGLE: {
            return {
                sidenavOpen: !state.sidenavOpen
            };
        }
        default:
            return state;
    }
}

export const getSidenavOpen = (state: LayoutState) => state.sidenavOpen;