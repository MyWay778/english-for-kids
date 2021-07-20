import { GameActions, GameActionsTypes, GameState } from '../../types/game';

const initialState: GameState = {
  gameResult: null,
  cards: [],
  categories: [],
  currentCategory: null,
};

const gameReducer = (state = initialState, action: GameActions): GameState => {
  switch (action.type) {
    case GameActionsTypes.SET_GAME_RESULT:
      return { ...state, gameResult: action.payload };
    case GameActionsTypes.FETCH_CARDS:
      return { ...state, cards: action.payload };
    case GameActionsTypes.FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    case GameActionsTypes.CHANGE_CATEGORY:
      return { ...state, currentCategory: action.payload };
    default:
      return state;
  }
};

export default gameReducer;
