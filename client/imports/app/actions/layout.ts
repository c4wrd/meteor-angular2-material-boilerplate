import { Action } from '@ngrx/store';

export const ActionTypes = {
  SIDENAV_OPEN:   "SIDENAV_OPEN",
  SIDENAV_CLOSED:  "SIDENAV_CLOSED"
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