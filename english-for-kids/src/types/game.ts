export interface GameState {
  gameResult: GameResultType | null;
}

export interface GameResultType  {
  wrongAnswers: number;
}

export enum GameActionsTypes {
  SET_GAME_RESULT = 'SET_GAME_RESULT'
}


export interface SetGameResultAction {
  type: GameActionsTypes.SET_GAME_RESULT;
  payload: GameResultType;
}


export type GameActions = SetGameResultAction;