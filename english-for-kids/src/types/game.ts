export interface GameState {
  gameResult: GameResultType | null;
  cards: CardType[];
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
}

export interface CardType {
  id: number;
  spelling: string;
  translating: string;
  imageSrc: string;
  soundSrc: string;
}

export interface GameResultType {
  wrongAnswers: number;
}

export enum GameActionsTypes {
  SET_GAME_RESULT = 'SET_GAME_RESULT',
  FETCH_CARDS = 'FETCH_CARDS',
  FETCH_CATEGORIES = 'FETCH_CATEGORIES',
  CHANGE_CATEGORY = 'CHANGE_CATEGORY',
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

export type GameActions =
  | SetGameResultAction
  | FetchCardsAction
  | ChangeCategory
  | FetchCategories;
