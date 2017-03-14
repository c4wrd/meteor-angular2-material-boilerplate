import { Meteor } from 'meteor/meteor';
import { Action } from '@ngrx/store';
import { type } from "@app:utils";

/**
 * Note: The login and logout
 * succeed and failure messages
 * are not handled for this implementation.
 */
export const AuthActionTypes = {
    LOAD_USER: type("LOAD_USER"),
    USER_DATA: type("USER_DATA"),
    LOGIN: type("LOGIN"),
    LOGIN_SUCCESS: type("LOGIN_SUCCEEDED"),
    LOGIN_FAILED: type("LOGIN_FAILED"),
    LOGOUT: type("LOGOUT"),
    LOGOUT_SUCCESS: type("LOGOUT_SUCCEEDED"),
    LOGOUT_FAILED: type("LOGOUT_FAILED")
}

export class LoginUserAction implements Action {
    type = AuthActionTypes.LOGIN;
    constructor(public payload: any = undefined) {}
}

export class LogoutUserAction implements Action {
    type = AuthActionTypes.LOGOUT;
    constructor(public payload: any = undefined) {}
}

export class LoadUserAction implements Action {
    type = AuthActionTypes.LOAD_USER;
    constructor(public payload: any = undefined) {}
}

export class UserDataAction implements Action {
    type = AuthActionTypes.USER_DATA;
    constructor(public payload: Meteor.User) {}
}

export type AuthActionType = LoginUserAction | LogoutUserAction | LoadUserAction | UserDataAction;

export const AuthActions = {
    LoginUserAction,
    LogoutUserAction,
    LoadUserAction,
    UserDataAction
}