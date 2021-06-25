import {
  AppState,
  AppStateActions,
  AppStateActionTypes,
} from '../../types/app';

const initialState: AppState = {
  openedAsideMenu: false,
};

const appReducer = (
  state = initialState,
  action: AppStateActions
): AppState => {
  switch (action.type) {
    case AppStateActionTypes.OPEN_ASIDE_MENU:
      return {
        ...state,
        openedAsideMenu: true,
      };
    case AppStateActionTypes.CLOSE_ASIDE_MENU:
      return {
        ...state,
        openedAsideMenu: false,
      };
    default:
      return state;
  }
};

export default appReducer;
