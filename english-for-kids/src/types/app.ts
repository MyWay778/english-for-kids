export interface AppState {
  openedAsideMenu: boolean;
}

export enum AppStateActionTypes {
  OPEN_ASIDE_MENU = 'OPEN_ASIDE_MENU',
  CLOSE_ASIDE_MENU = 'CLOSE_ASIDE_MENU',
}

interface OpenAsideMenuAction {
  type: AppStateActionTypes.OPEN_ASIDE_MENU;
}

interface CloseAsideMenuAction {
  type: AppStateActionTypes.CLOSE_ASIDE_MENU;
}

export type AppStateActions = OpenAsideMenuAction | CloseAsideMenuAction;
