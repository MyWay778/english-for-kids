import { CategoryActionsCreator } from './category';
import appActionCreators from './app';
import cardsActionCreators from './cards';
import gameActionCreators from './game';

type ActionCreators = typeof CategoryActionsCreator &
  typeof appActionCreators &
  typeof cardsActionCreators &
  typeof gameActionCreators;

export type ActionsCreatorType = {
  [K in keyof ActionCreators]: ActionCreators[K];
};

const ActionsCreator: ActionsCreatorType = {
  ...CategoryActionsCreator,
  ...appActionCreators,
  ...cardsActionCreators,
  ...gameActionCreators,
};

export default ActionsCreator;
