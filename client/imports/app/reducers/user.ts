import * as user from "../actions/user";
import { Meteor } from "meteor/meteor";

export interface State {
    user: Meteor.User;
    loggedIn: boolean;
}

const initialState: State = {
    user: null,
    loggedIn: false
}

export function reducer(state = initialState, action: user.Actions): State {
    switch ( action.type ) {
        case user.ActionTypes.USER_DATA: {
            return Object.assign({}, {
                user: action.payload,
                loggedIn: !!action.payload
            }, state);
        }
        default:
            return state;
    }
}

export const isUserLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;