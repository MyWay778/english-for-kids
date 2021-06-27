import { Dispatch } from 'redux';
import {
  GameActionsTypes,
  GameResultType,
  SetGameResultAction,
} from '../../types/game';

const setGameResult =
  (gameResult: GameResultType) =>
  (dispatch: Dispatch<SetGameResultAction>): void => {
    dispatch({ type: GameActionsTypes.SET_GAME_RESULT, payload: gameResult });
  };

const gameActionCreators = {
  setGameResult
}

export default gameActionCreators;