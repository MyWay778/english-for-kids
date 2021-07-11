import { combineReducers } from 'redux';
import appReducer from './appReducer';
import gameReducer from './gameReducer';
import authReducer from './authReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  game: gameReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
