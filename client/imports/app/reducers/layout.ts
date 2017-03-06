import * as layout from "../actions/layout";

export interface State {
    sidenavOpen: boolean;
}

const initialState: State = {
    sidenavOpen: true
}

export function reducer(state = initialState, action: layout.Actions): State {
    switch ( action.type ) {
        case layout.ActionTypes.SIDENAV_OPEN: {
            return {
                sidenavOpen: true
            }
        }
        case layout.ActionTypes.SIDENAV_CLOSED: {
            return {
                sidenavOpen: false
            }
        }
        default:
            return state;
    }
}

export const getSidenavOpen = (state: State) => state.sidenavOpen;