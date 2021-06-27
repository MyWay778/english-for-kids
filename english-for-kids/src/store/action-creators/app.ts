import { Dispatch } from 'react';
import { AppStateActions, AppStateActionTypes } from '../../types/app';

const openAsideMenu =
  () =>
  (dispatch: Dispatch<AppStateActions>): void => {
    dispatch({ type: AppStateActionTypes.OPEN_ASIDE_MENU });
  };

const closeAsideMenu =
  () =>
  (dispatch: Dispatch<AppStateActions>): void => {
    dispatch({ type: AppStateActionTypes.CLOSE_ASIDE_MENU });
  };

const setGameMode =
  (isGameMode: boolean) =>
  (dispatch: Dispatch<AppStateActions>): void => {
    dispatch({ type: AppStateActionTypes.SET_GAME_MODE, payload: isGameMode });
  };

const appActionCreators = {
  openAsideMenu,
  closeAsideMenu,
  setGameMode,
};

export default appActionCreators;
