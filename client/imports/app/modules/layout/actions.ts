import { Action } from '@ngrx/store';
import { type } from "@app:utils";

export const LayoutActionTypes = {
  SIDENAV_TOGGLE:   type("SIDENAV_TOGGLE"),
};


export class ToggleSideNavAction implements Action {
  type = LayoutActionTypes.SIDENAV_TOGGLE;
}

export type LayoutActionType
  = ToggleSideNavAction;

export const LayoutActions = {
    ToggleSideNavAction
}