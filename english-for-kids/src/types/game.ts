export interface GameState {
  gameResult: GameResultType | null;
  sessionStatistic: WordStatisticType[];
}

export interface WordStatisticType {
  id: number;
  spelling: string;
  translating: string;
  clicksInTrain: number;
  guessed: number;
  missed: number;
}

export interface GameResultType {
  wrongAnswers: number;
}

export enum GameActionsTypes {
  SET_GAME_RESULT = 'SET_GAME_RESULT',
  SET_SESSION_STATISTIC = 'SET_SESSION_STATISTIC',
}

export interface SetGameResultAction {
  type: GameActionsTypes.SET_GAME_RESULT;
  payload: GameResultType;
}

export interface SetSessionStatistic {
  type: GameActionsTypes.SET_SESSION_STATISTIC;
  payload: WordStatisticType[];
}

export type GameActions = SetGameResultAction | SetSessionStatistic;
