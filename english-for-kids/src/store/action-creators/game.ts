import { Dispatch } from 'redux';
import { CardType } from '../../types/cards';
import {
  GameActions,
  GameActionsTypes,
  GameResultType,
} from '../../types/game';

const setGameResult =
  (gameResult: GameResultType) =>
  (dispatch: Dispatch<GameActions>): void => {
    dispatch({ type: GameActionsTypes.SET_GAME_RESULT, payload: gameResult });
  };

export const setSessionStatistic =
  (cards: CardType[]) =>
  (dispatch: Dispatch<GameActions>): void => {
    dispatch({
      type: GameActionsTypes.SET_SESSION_STATISTIC,
      payload: cards.map(({ id, spelling, translating }) => ({
        id,
        spelling,
        translating,
        clicksInTrain: 0,
        guessed: 0,
        missed: 0,
      })),
    });
  };

const gameActionCreators = {
  setGameResult,
  setSessionStatistic,
};

export default gameActionCreators;
