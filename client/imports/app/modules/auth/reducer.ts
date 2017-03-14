import {Meteor} from "meteor/meteor";
import {GoogleAccount} from "meteor/accounts/google";

import { AuthActionType, AuthActionTypes, AuthActions } from './actions';

export interface AuthState {
    user?: Meteor.User;
    googleProfile?: GoogleAccount;
    error: string;
    loggedIn: boolean;
}

const initialState: AuthState = {
    user: null,
    googleProfile: null,
    error: null,
    loggedIn: false
};

export function authReducer(state = initialState, action: AuthActionType): AuthState {
    switch ( action.type ) {
        case AuthActionTypes.USER_DATA: {
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
        case AuthActionTypes.LOGIN_FAILED: {
            let error = "There was an error logging into the application. Please refresh this page and try again";
            return Object.assign({}, state, {
                error
            });
        }
        default:
            return state;
    }
}

export const isUserLoggedIn = (state: AuthState) => state.loggedIn;
export const getUser = (state: AuthState) => state.user;
export const getError = (state: AuthState) => state.error;
export const getGoogleProfile = (state: AuthState) => state.googleProfile;