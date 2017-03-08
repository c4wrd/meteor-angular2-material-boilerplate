import { Action } from '@ngrx/store';
import { type } from "@app:utils";

export const ActionTypes = {
  SIDENAV_TOGGLE:   type("SIDENAV_TOGGLE"),
};


export class ToggleSideNavAction implements Action {
  type = ActionTypes.SIDENAV_TOGGLE;
}

export type Actions
  = ToggleSideNavAction;