import { combineReducers } from 'redux';
import appReducer from './appReducer';
import gameReducer from './gameReducer';
import authReducer from './authReducer';
import wordsStatReducer from './wordsStatReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  game: gameReducer,
  auth: authReducer,
  wordsStat: wordsStatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
