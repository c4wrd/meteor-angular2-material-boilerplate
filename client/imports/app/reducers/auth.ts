import * as user from "../actions/user";
import { Meteor } from "meteor/meteor";

export interface State {
    user?: Meteor.User;
    userId?: string;
    error?: string;
    loggedIn: boolean;
}

const initialState: State = {
    user: null,
    loggedIn: false
}

export function reducer(state = initialState, action: user.Actions): State {
    switch ( action.type ) {
        case user.ActionTypes.USER_DATA: {
            let user = action.payload as Meteor.User;
            let loggedIn = !!user;
            let error = null;
            return Object.assign({}, {
                user,
                loggedIn,
                error
            }, state);
        }
        case user.ActionTypes.LOGIN_FAILED: {
            let error = "There was an error logging into the application. Please refresh this page and try again";
            return Object.assign({}, {
                error
            }, state)
        }
        default:
            return state;
    }
}

export const isUserLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
export const getError = (state: State) => state.error;