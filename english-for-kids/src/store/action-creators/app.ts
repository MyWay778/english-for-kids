import { Dispatch } from 'react';
import {
  AppStateActions,
  AppStateActionTypes,
  UserLoginDataType,
} from '../../types/app';

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

const setIsLoading =
  (isLoading: boolean) =>
  (dispatch: Dispatch<AppStateActions>): void => {
    dispatch({ type: AppStateActionTypes.SET_IS_LOADING, payload: isLoading });
  };

const setIsOpenModal =
  (isOpened: boolean) =>
  (dispatch: Dispatch<AppStateActions>): void => {
    dispatch({
      type: AppStateActionTypes.SET_IS_OPEN_MODAL,
      payload: isOpened,
    });
  };


const appActionCreators = {
  openAsideMenu,
  closeAsideMenu,
  setGameMode,
  setIsLoading,
  setIsOpenModal,
};

export default appActionCreators;
