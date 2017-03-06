import { Meteor } from 'meteor/meteor';
import { Action } from '@ngrx/store';
import { type } from "../util";

export const ActionTypes = {
    LOAD_USER: type("LOAD_USER"),
    USER_DATA: type("USER_DATA"),
    LOGIN: type("LOGIN"),
    LOGIN_SUCCEEDED: type("LOGIN_SUCCEEDED"),
    LOGIN_FAILED: type("LOGIN_FAILED"),
    LOGOUT: type("LOGOUT"),
    LOGOUT_SUCCEEDED: type("LOGOUT_SUCCEEDED"),
    LOGOUT_FAILED: type("LOGOUT_FAILED")
}

export class LoginUserAction implements Action {
    type = ActionTypes.LOGIN;
    constructor(public payload: any) {}
}

export class LogoutUserAction implements Action {
    type = ActionTypes.LOGOUT;
    constructor(public payload: any) {}
}

export class LoadUserAction implements Action {
    type = ActionTypes.LOAD_USER;
    constructor(public payload: any = undefined) {}
}

export class UserDataAction implements Action {
    type = ActionTypes.USER_DATA;
    constructor(public payload: Meteor.User) {}
}

export type Actions = LoginUserAction | LogoutUserAction | LoadUserAction | UserDataAction;