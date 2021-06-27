import { combineReducers } from 'redux';
import appReducer from './appReducer';
import cardsReducer from './cardsReducer';
import categoryReducer from './categoryReducer';
import gameReducer from './gameReducer';

export const rootReducer = combineReducers({
  category: categoryReducer,
  app: appReducer,
  cards: cardsReducer,
  game: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
