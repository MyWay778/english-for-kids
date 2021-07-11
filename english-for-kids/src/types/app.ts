export interface AppState {
  openedAsideMenu: boolean;
  gameMode: boolean;
  isLoading: boolean;
  isOpenModal: boolean;
}

export interface UserLoginDataType {
  login: string;
  password: string;
}

export enum AppStateActionTypes {
  OPEN_ASIDE_MENU = 'OPEN_ASIDE_MENU',
  CLOSE_ASIDE_MENU = 'CLOSE_ASIDE_MENU',
  SET_GAME_MODE = 'SET_GAME_MODE',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_IS_OPEN_MODAL = 'SET_IS_OPEN_MODAL',
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

interface SetIsLoading {
  type: AppStateActionTypes.SET_IS_LOADING;
  payload: boolean;
}

interface SetIsOpenModal {
  type: AppStateActionTypes.SET_IS_OPEN_MODAL;
  payload: boolean;
}

export type AppStateActions =
  | OpenAsideMenuAction
  | CloseAsideMenuAction
  | SetGameModeAction
  | SetIsLoading
  | SetIsOpenModal;
