import {
  deleteStatisticsFromLS,
  getStatisticFromLS,
  saveStatisticToLS,
} from '../../helpers/localStorageAccess';
import {
  GameActions,
  GameActionsTypes,
  GameState,
} from '../../types/game';

const initialState: GameState = {
  gameResult: null,
  cards: [],
  categories: [],
  currentCategory: null,
};

// const updateWordsStatistic = (
//   wordStatistic: WordStatisticType,
//   newData: WordStatisticPropType
// ): WordStatisticType => ({
//   ...wordStatistic,
//   clicksInTrain: newData.clicksInTrain
//     ? wordStatistic.clicksInTrain + newData.clicksInTrain
//     : wordStatistic.clicksInTrain,
//   guessed: newData.guessed
//     ? wordStatistic.guessed + newData.guessed
//     : wordStatistic.guessed,
//   missed: newData.missed
//     ? wordStatistic.missed + newData.missed
//     : wordStatistic.missed,
// });

const gameReducer = (state = initialState, action: GameActions): GameState => {
  switch (action.type) {
    case GameActionsTypes.SET_GAME_RESULT:
      return { ...state, gameResult: action.payload };
    // case GameActionsTypes.SET_WORDS_STATISTIC:
    //   return { ...state, wordsStatistic: action.payload };
    case GameActionsTypes.FETCH_CARDS:
      return { ...state, cards: action.payload };
    // case GameActionsTypes.UPDATE_WORDS_STATISTIC: {
    //   let newWordStat: WordStatisticType;
    //   if (!state.wordsStatistic[action.payload.id]) {
    //     const targetExistCard = state.cards.find(
    //       (card) => card.id === Number(action.payload.id)
    //     );
    //     newWordStat = {
    //       categoryName: state.currentCategory?.name || 'unknown',
    //       spelling: targetExistCard?.spelling || 'unknown',
    //       translating: targetExistCard?.translating || 'unknown',
    //       clicksInTrain: action.payload.clicksInTrain || 0,
    //       guessed: action.payload.guessed || 0,
    //       missed: action.payload.missed || 0,
    //     };
    //   } else {
    //     newWordStat = updateWordsStatistic(
    //       state.wordsStatistic[action.payload.id],
    //       action.payload
    //     );
    //   }
    //   return {
    //     ...state,
    //     wordsStatistic: {
    //       ...state.wordsStatistic,
    //       [action.payload.id]: newWordStat,
    //     },
    //   };
    // }
    case GameActionsTypes.FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    case GameActionsTypes.CHANGE_CATEGORY:
      return { ...state, currentCategory: action.payload };
    // case GameActionsTypes.SAVE_WORDS_STATISTIC: {
    //   saveStatisticToLS(state.wordsStatistic);
    //   return { ...state, wordsStatistic: {} };
    // }
    // case GameActionsTypes.GET_WORDS_STATISTIC: {
    //   const receivedStats = getStatisticFromLS();
    //   return { ...state, wordsStatistic: receivedStats || {} };
    // }
    // case GameActionsTypes.DELETE_WORDS_STATISTIC: {
    //   deleteStatisticsFromLS();
    //   return { ...state, wordsStatistic: {} };
    // }
    default:
      return state;
  }
};

export default gameReducer;
