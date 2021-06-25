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

const appActionCreators = {
  openAsideMenu,
  closeAsideMenu,
};

export default appActionCreators;
