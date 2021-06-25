import { combineReducers } from 'redux';
import appReducer from './appReducer';
import categoryReducer from './categoryReducer';

export const rootReducer = combineReducers({
  category: categoryReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
