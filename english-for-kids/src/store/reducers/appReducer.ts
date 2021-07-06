import {
  AppState,
  AppStateActions,
  AppStateActionTypes,
} from '../../types/app';

const initialState: AppState = {
  openedAsideMenu: false,
  gameMode: false,
  isLoading: false,
  isOpenModal: false,
  isAuth: false,
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
    case AppStateActionTypes.SET_GAME_MODE:
      return {
        ...state,
        gameMode: action.payload,
      };
    case AppStateActionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case AppStateActionTypes.SET_IS_OPEN_MODAL:
      return {
        ...state,
        isOpenModal: action.payload,
      };

    case AppStateActionTypes.SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
