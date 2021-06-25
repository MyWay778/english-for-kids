import { combineReducers } from 'redux';
import appReducer from './appReducer';
import cardsReducer from './cardsReducer';
import categoryReducer from './categoryReducer';

export const rootReducer = combineReducers({
  category: categoryReducer,
  app: appReducer,
  cards: cardsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
