import { GameActions, GameActionsTypes, GameState } from '../../types/game';

const initialState: GameState = {
  gameResult: null,
};

const gameReducer = (state = initialState, action: GameActions): GameState  => {
  switch (action.type) {
    case GameActionsTypes.SET_GAME_RESULT:
      return { ...state, gameResult: action.payload };
    default:
      return state;
  }
};

export default gameReducer;