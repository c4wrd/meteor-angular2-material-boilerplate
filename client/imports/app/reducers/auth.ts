import * as User from "../actions/user";
import {Meteor} from "meteor/meteor";
import {GoogleAccount} from "meteor/accounts/google";

export interface State {
    user?: Meteor.User;
    googleProfile?: GoogleAccount;
    error: string;
    loggedIn: boolean;
}

const initialState: State = {
    user: null,
    googleProfile: null,
    error: null,
    loggedIn: false
};

export function reducer(state = initialState, action: User.Actions): State {
    switch ( action.type ) {
        case User.ActionTypes.USER_DATA: {
            let user = action.payload as Meteor.User;
            let loggedIn = !!user;
            let googleProfile = null;
            if ( loggedIn ) {
                googleProfile = user.services.google;
            }
            let error = null;
            return Object.assign({}, state, {
                error,
                googleProfile,
                loggedIn,
                user
            });
        }
        case User.ActionTypes.LOGIN_FAILED: {
            let error = "There was an error logging into the application. Please refresh this page and try again";
            return Object.assign({}, state, {
                error
            });
        }
        default:
            return state;
    }
}

export const isUserLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
export const getError = (state: State) => state.error;
export const getGoogleProfile = (state: State) => state.googleProfile;