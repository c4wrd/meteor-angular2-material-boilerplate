import { Action } from '@ngrx/store';
import { type } from "../util";

export const ActionTypes = {
  SIDENAV_TOGGLE:   type("SIDENAV_TOGGLE"),
};


export class ToggleSideNavAction implements Action {
  type = ActionTypes.SIDENAV_TOGGLE;
}

export type Actions
  = ToggleSideNavAction;