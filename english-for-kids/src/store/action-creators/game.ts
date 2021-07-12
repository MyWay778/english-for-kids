import {Dispatch} from 'redux';
import {
  CurrentCategoryType,
  GameActions,
  GameActionsTypes,
  GameResultType,
} from '../../types/game';
import CategoryDataService from '../../api/category/category.service';
import store from '../index';

const setGameResult =
  (gameResult: GameResultType) =>
    (dispatch: Dispatch<GameActions>): void => {
      dispatch({type: GameActionsTypes.SET_GAME_RESULT, payload: gameResult});
    };

// export const setWordsStatistic =
//   (wordsStatistic: WordsStatisticType) =>
//     (dispatch: Dispatch<GameActions>): void => {
//       dispatch({
//         type: GameActionsTypes.SET_WORDS_STATISTIC,
//         payload: wordsStatistic,
//       });
//     };

// export const updateWordsStatistic =
//   (newWordData: WordStatisticPropType) =>
//     (dispatch: Dispatch<GameActions>): void => {
//       dispatch({
//         type: GameActionsTypes.UPDATE_WORDS_STATISTIC,
//         payload: newWordData,
//       });
//     };

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

const fetchCardsByIds =
  () => async (dispatch: Dispatch<GameActions>): Promise<void> => {

    const {wordsStatistics} = store.getState().wordsStat;
    const cardsIds = wordsStatistics.filter(word => word.correctAnswersPercent >= 0)
      .sort((firstWord, secondWord) => firstWord.correctAnswersPercent - secondWord.correctAnswersPercent)
      .map(word => word.id)
      .slice(0, 8);
    if (cardsIds.length > 0) {
      try {

        const response = await CategoryDataService.getWordsByIds(cardsIds);
        dispatch({type: GameActionsTypes.FETCH_CARDS, payload: response.data});

      } catch (e) {
        console.error(e);
      }
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

// const saveWordsStatistic =
//   () =>
//     (dispatch: Dispatch<GameActions>): void => {
//       dispatch({type: GameActionsTypes.SAVE_WORDS_STATISTIC});
//     };

// const getWordsStatistic =
//   () =>
//     (dispatch: Dispatch<GameActions>): void => {
//       dispatch({type: GameActionsTypes.GET_WORDS_STATISTIC});
//     };

// const deleteWordsStatistic =
//   () =>
//     (dispatch: Dispatch<GameActions>): void => {
//       dispatch({type: GameActionsTypes.DELETE_WORDS_STATISTIC});
//     };

const gameActionCreators = {
  setGameResult,
  // setWordsStatistic,
  // updateWordsStatistic,
  fetchCards,
  changeCategory,
  fetchCategories,
  fetchCardsByIds
  // saveWordsStatistic,
  // getWordsStatistic,
  // deleteWordsStatistic,
};

export default gameActionCreators;
