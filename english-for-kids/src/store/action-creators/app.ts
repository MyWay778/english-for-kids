import { Dispatch } from 'react';
import { authorizeFromApi } from '../../mock-api/mock-api';
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

const authorize =
  (user: UserLoginDataType) =>
  async (dispatch: Dispatch<AppStateActions>): Promise<void> => {
    const responseStatus = await authorizeFromApi(user);
    if (responseStatus === 200) {
      dispatch({ type: AppStateActionTypes.SET_IS_AUTH, payload: true });
      dispatch({ type: AppStateActionTypes.SET_IS_OPEN_MODAL, payload: false });
    }
  };

const logout =
  () =>
  (dispatch: Dispatch<AppStateActions>): void => {
    dispatch({ type: AppStateActionTypes.SET_IS_AUTH, payload: false });
  };

const appActionCreators = {
  openAsideMenu,
  closeAsideMenu,
  setGameMode,
  setIsLoading,
  setIsOpenModal,
  authorize,
  logout,
};

export default appActionCreators;
