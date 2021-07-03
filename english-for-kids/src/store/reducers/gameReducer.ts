import {
  GameActions,
  GameActionsTypes,
  GameState,
} from '../../types/game';

const initialState: GameState = {
  gameResult: null,
  sessionStatistic: [],
};

const gameReducer = (state = initialState, action: GameActions): GameState => {
  switch (action.type) {
    case GameActionsTypes.SET_GAME_RESULT:
      return { ...state, gameResult: action.payload };
    case GameActionsTypes.SET_SESSION_STATISTIC:
      return { ...state, sessionStatistic: action.payload };
    default:
      return state;
  }
};

export default gameReducer;
