import * as layout from "../actions/layout";

export interface State {
    sidenavOpen: boolean;
}

const initialState: State = {
    sidenavOpen: true
}

export function reducer(state = initialState, action: layout.Actions): State {
    switch ( action.type ) {
        case layout.ActionTypes.SIDENAV_TOGGLE: {
            return {
                sidenavOpen: !state.sidenavOpen
            };
        }
        default:
            return state;
    }
}

export const getSidenavOpen = (state: State) => state.sidenavOpen;