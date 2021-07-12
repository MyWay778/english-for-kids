export interface GameState {
  gameResult: GameResultType | null;
  cards: CardType[];
  // wordsStatistic: WordsStatisticType;
  categories: CategoryType[];
  currentCategory: CurrentCategoryType | null;
}

export interface CurrentCategoryType {
  id: number;
  name: string;
}

export interface CategoryType {
  id: number;
  name: string;
  imageSrc: string;
  wordCount: number;
}

export interface CardType {
  id: number;
  spelling: string;
  translating: string;
  imageSrc: string;
  soundSrc: string;
}

// export interface WordsStatisticType {
//   [K: string]: WordStatisticType;
// }
//
// export interface WordStatisticType {
//   categoryName: string;
//   spelling: string;
//   translating: string;
//   clicksInTrain: number;
//   guessed: number;
//   missed: number;
// }

// export interface WordStatisticPropType {
//   id: string;
//   clicksInTrain?: number;
//   guessed?: number;
//   missed?: number;
// }

export interface GameResultType {
  wrongAnswers: number;
}

export enum GameActionsTypes {
  SET_GAME_RESULT = 'SET_GAME_RESULT',
  SET_WORDS_STATISTIC = 'SET_WORDS_STATISTIC',
  FETCH_CARDS = 'FETCH_CARDS',
  FETCH_CATEGORIES = 'FETCH_CATEGORIES',
  CHANGE_CATEGORY = 'CHANGE_CATEGORY',
  UPDATE_WORDS_STATISTIC = 'UPDATE_WORDS_STATISTIC',
  SAVE_WORDS_STATISTIC = 'SAVE_WORDS_STATISTIC',
  GET_WORDS_STATISTIC = 'GET_WORDS_STATISTIC',
  DELETE_WORDS_STATISTIC = 'DELETE_WORDS_STATISTIC',
}

interface ChangeCategory {
  type: GameActionsTypes.CHANGE_CATEGORY;
  payload: CurrentCategoryType;
}

interface FetchCategories {
  type: GameActionsTypes.FETCH_CATEGORIES;
  payload: CategoryType[];
}

export interface SetGameResultAction {
  type: GameActionsTypes.SET_GAME_RESULT;
  payload: GameResultType;
}

interface FetchCardsAction {
  type: GameActionsTypes.FETCH_CARDS;
  payload: CardType[];
}

// export interface SetWordsStatistic {
//   type: GameActionsTypes.SET_WORDS_STATISTIC;
//   payload: WordsStatisticType;
// }

// export interface UpdateWordStatistic {
//   type: GameActionsTypes.UPDATE_WORDS_STATISTIC;
//   payload: WordStatisticPropType;
// }

// export interface SaveWordStatistic {
//   type: GameActionsTypes.SAVE_WORDS_STATISTIC;
// }

// interface GetWordStatistic {
//   type: GameActionsTypes.GET_WORDS_STATISTIC;
// }

// interface DeleteWordStatistic {
//   type: GameActionsTypes.DELETE_WORDS_STATISTIC;
// }

export type GameActions =
  | SetGameResultAction
  // | SetWordsStatistic
  // | UpdateWordStatistic
  | FetchCardsAction
  | ChangeCategory
  | FetchCategories
  // | SaveWordStatistic
  // | GetWordStatistic
  // | DeleteWordStatistic;
