import {Dispatch} from 'redux';
import {
  fetchCardsFromApi,
  fetchCategoriesFromApi,
} from '../../mock-api/mock-api';
import {
  CurrentCategoryType,
  GameActions,
  GameActionsTypes,
  GameResultType,
  WordsStatisticType,
  WordStatisticPropType,
} from '../../types/game';
import CategoryDataService from '../../api/category/category.service';

const setGameResult =
  (gameResult: GameResultType) =>
    (dispatch: Dispatch<GameActions>): void => {
      dispatch({type: GameActionsTypes.SET_GAME_RESULT, payload: gameResult});
    };

export const setWordsStatistic =
  (wordsStatistic: WordsStatisticType) =>
    (dispatch: Dispatch<GameActions>): void => {
      dispatch({
        type: GameActionsTypes.SET_WORDS_STATISTIC,
        payload: wordsStatistic,
      });
    };

export const updateWordsStatistic =
  (newWordData: WordStatisticPropType) =>
    (dispatch: Dispatch<GameActions>): void => {
      dispatch({
        type: GameActionsTypes.UPDATE_WORDS_STATISTIC,
        payload: newWordData,
      });
    };

const fetchCards =
  (categoryId: number) =>
    async (dispatch: Dispatch<GameActions>): Promise<void> => {
      try {
        const cards = await CategoryDataService.getWordsFromCategory(categoryId);
        dispatch({type: GameActionsTypes.FETCH_CARDS, payload: cards.data});
      } catch (e) {
        console.error(e);
      }
    };

export const changeCategory =
  (category: CurrentCategoryType) =>
    (dispatch: Dispatch<GameActions>): void => {
      dispatch({type: GameActionsTypes.CHANGE_CATEGORY, payload: category});
    };

export const fetchCategories =
  () =>
    async (dispatch: Dispatch<GameActions>): Promise<void> => {
      const categories = await CategoryDataService.getAll();
      dispatch({
        type: GameActionsTypes.FETCH_CATEGORIES,
        payload: categories.data,
      });
    };

const saveWordsStatistic =
  () =>
    (dispatch: Dispatch<GameActions>): void => {
      dispatch({type: GameActionsTypes.SAVE_WORDS_STATISTIC});
    };

const getWordsStatistic =
  () =>
    (dispatch: Dispatch<GameActions>): void => {
      dispatch({type: GameActionsTypes.GET_WORDS_STATISTIC});
    };

const deleteWordsStatistic =
  () =>
    (dispatch: Dispatch<GameActions>): void => {
      dispatch({type: GameActionsTypes.DELETE_WORDS_STATISTIC});
    };

const gameActionCreators = {
  setGameResult,
  setWordsStatistic,
  updateWordsStatistic,
  fetchCards,
  changeCategory,
  fetchCategories,
  saveWordsStatistic,
  getWordsStatistic,
  deleteWordsStatistic,
};

export default gameActionCreators;
