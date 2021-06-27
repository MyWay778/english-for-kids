export interface AppState {
  openedAsideMenu: boolean;
  gameMode: boolean;
}

export enum AppStateActionTypes {
  OPEN_ASIDE_MENU = 'OPEN_ASIDE_MENU',
  CLOSE_ASIDE_MENU = 'CLOSE_ASIDE_MENU',
  SET_GAME_MODE = 'SET_GAME_MODE',
}

interface OpenAsideMenuAction {
  type: AppStateActionTypes.OPEN_ASIDE_MENU;
}

interface CloseAsideMenuAction {
  type: AppStateActionTypes.CLOSE_ASIDE_MENU;
}

interface SetGameModeAction {
  type: AppStateActionTypes.SET_GAME_MODE;
  payload: boolean;
}

export type AppStateActions =
  | OpenAsideMenuAction
  | CloseAsideMenuAction
  | SetGameModeAction;
