import { Dispatch } from 'redux';
import {
  CurrentCategoryType,
  GameActions,
  GameActionsTypes,
  GameResultType,
} from '../../types/game';
import CategoryDataService from '../../api/category/category.service';
import store from '../index';
import { AppStateActions, AppStateActionTypes } from '../../types/app';

const setGameResult =
  (gameResult: GameResultType) =>
  (dispatch: Dispatch<GameActions>): void => {
    dispatch({ type: GameActionsTypes.SET_GAME_RESULT, payload: gameResult });
  };

const fetchCards =
  (categoryId: number) =>
  async (dispatch: Dispatch<GameActions>): Promise<void> => {
    try {
      const cards = await CategoryDataService.getWordsFromCategory(categoryId);
      dispatch({ type: GameActionsTypes.FETCH_CARDS, payload: cards.data });
    } catch (e) {
      console.error(e);
    }
  };

const fetchCardsByIds =
  () =>
  async (dispatch: Dispatch<GameActions>): Promise<void> => {
    const { wordsStatistics } = store.getState().wordsStat;
    const cardsIds = wordsStatistics
      .filter((word) => word.correctAnswersPercent >= 0)
      .sort(
        (firstWord, secondWord) =>
          firstWord.correctAnswersPercent - secondWord.correctAnswersPercent
      )
      .map((word) => word.id)
      .slice(0, 8);
    if (cardsIds.length > 0) {
      try {
        const response = await CategoryDataService.getWordsByIds(cardsIds);
        dispatch({
          type: GameActionsTypes.FETCH_CARDS,
          payload: response.data,
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

export const changeCategory =
  (category: CurrentCategoryType) =>
  (dispatch: Dispatch<GameActions>): void => {
    dispatch({ type: GameActionsTypes.CHANGE_CATEGORY, payload: category });
  };

export const fetchCategories =
  () =>
  async (dispatch: Dispatch<GameActions | AppStateActions>): Promise<void> => {
    dispatch({ type: AppStateActionTypes.SET_IS_LOADING, payload: true });
    const categories = await CategoryDataService.getAll();
    dispatch({
      type: GameActionsTypes.FETCH_CATEGORIES,
      payload: categories.data,
    });
    dispatch({ type: AppStateActionTypes.SET_IS_LOADING, payload: false });
  };

export const cleanupCategories =
  () =>
  (dispatch: Dispatch): void => {
    dispatch({ type: GameActionsTypes.FETCH_CATEGORIES, payload: [] });
  };

const gameActionCreators = {
  setGameResult,
  fetchCards,
  changeCategory,
  fetchCategories,
  fetchCardsByIds,
  cleanupCategories,
};

export default gameActionCreators;
