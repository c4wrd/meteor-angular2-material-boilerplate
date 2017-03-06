import { Action } from '@ngrx/store';
import { type } from "../util";

export const ActionTypes = {
  SIDENAV_OPEN:   type("SIDENAV_OPEN"),
  SIDENAV_CLOSED:  type("SIDENAV_CLOSED")
};


export class OpenSidenavAction implements Action {
  type = ActionTypes.SIDENAV_OPEN;
}

export class CloseSidenavAction implements Action {
  type = ActionTypes.SIDENAV_CLOSED;
}


export type Actions
  = OpenSidenavAction
  | CloseSidenavAction;